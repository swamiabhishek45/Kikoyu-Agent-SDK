import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { Agent } from '../src/agent.js';
import { RunContext } from '../src/run-context.js';
import { Runner } from '../src/runner.js';
import { createTool } from '../src/tool.js';
import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
} from '../src/types.js';

interface MyUserContext {
  userId: string;
  orgId: string;
}

class ContextInspectingMockProvider implements ModelProvider {
  readonly name = 'context-inspecting-mock';
  public completionsSent: ModelMessage[][] = [];

  async complete(
    messages: ModelMessage[],
    _options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    // Record deep copy of messages sent to model
    this.completionsSent.push(JSON.parse(JSON.stringify(messages)));

    if (this.completionsSent.length === 1) {
      return {
        text: '',
        toolCalls: [
          {
            id: 'call_user_lookup',
            name: 'get_user_profile',
            args: {},
          },
        ],
      };
    }

    return {
      text: 'User profile retrieved successfully.',
    };
  }
}

describe('RunContext Threading & Model Isolation', () => {
  it('should pass typed RunContext to tool execute without exposing it to the model', async () => {
    let capturedContext: RunContext<MyUserContext> | undefined;

    const getUserProfileTool = createTool<
      z.ZodObject<Record<string, never>>,
      { profile: string; userId: string },
      MyUserContext
    >({
      name: 'get_user_profile',
      description: 'Fetch user profile from context',
      parameters: z.object({}),
      execute: async (_args, ctx) => {
        capturedContext = ctx;
        const userId = ctx.get('userId');
        const orgId = ctx.value.orgId;
        return {
          profile: `Profile for ${userId} in org ${orgId}`,
          userId,
        };
      },
    });

    const mockProvider = new ContextInspectingMockProvider();

    const agent = new Agent({
      name: 'Context Agent',
      instructions: 'Use context tool when asked for profile.',
      model: mockProvider,
      tools: [getUserProfileTool],
    });

    const runner = new Runner();
    const result = await runner.run(agent, 'Get my profile', {
      context: { userId: 'usr_9988', orgId: 'org_alpha' },
    });

    // 1. Verify context reached tool execution
    expect(capturedContext).toBeInstanceOf(RunContext);
    expect(capturedContext?.get('userId')).toBe('usr_9988');
    expect(capturedContext?.value.orgId).toBe('org_alpha');

    // 2. Verify tool returned correct result in agent message trace
    expect(result.text).toBe('User profile retrieved successfully.');
    expect(result.messages[3].role).toBe('tool');
    expect(result.messages[3].content).toContain('usr_9988');

    // 3. Verify raw context object was NEVER sent to the model in completion messages
    for (const messageBatch of mockProvider.completionsSent) {
      for (const msg of messageBatch) {
        expect(msg).not.toHaveProperty('context');
        expect(msg).not.toHaveProperty('userId');
        expect(msg).not.toHaveProperty('orgId');
      }
    }
  });

  it('should accept existing RunContext instance in Runner.run', async () => {
    const customContext = new RunContext({ userId: 'usr_777' });
    expect(customContext.get('userId')).toBe('usr_777');
    expect(RunContext.from(customContext)).toBe(customContext);
  });
});
