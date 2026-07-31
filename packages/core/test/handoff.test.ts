import { describe, expect, it } from 'vitest';
import { Agent } from '../src/agent.js';
import { createHandoff } from '../src/handoff.js';
import { Runner } from '../src/runner.js';
import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
} from '../src/types.js';

class ScriptedHandoffModelProvider implements ModelProvider {
  readonly name = 'scripted-handoff-provider';
  private responses: ModelResponse[];
  private callCount = 0;
  public receivedMessagesTrace: ModelMessage[][] = [];

  constructor(responses: ModelResponse[]) {
    this.responses = responses;
  }

  async complete(
    messages: ModelMessage[],
    _options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    this.receivedMessagesTrace.push([...messages]);
    const response = this.responses[this.callCount];
    this.callCount++;

    return response ?? { text: 'Default response' };
  }
}

describe('Agent Handoffs', () => {
  it('should transfer execution from router agent to specialist agent and return specialist response', async () => {
    // Specialist Agent
    const specialistProvider = new ScriptedHandoffModelProvider([
      {
        text: 'def hello(): return "Hello Python!"',
      },
    ]);

    const codeSpecialistAgent = new Agent({
      name: 'Code Specialist',
      instructions: 'You are an expert Python coding assistant.',
      model: specialistProvider,
    });

    // Router Agent
    const routerProvider = new ScriptedHandoffModelProvider([
      // Turn 1: Router decides to handoff to Code Specialist
      {
        text: 'Transferring you to our code specialist.',
        toolCalls: [
          {
            id: 'call_handoff_123',
            name: 'transfer_to_code_specialist',
            args: { reason: 'User asked a python coding question' },
          },
        ],
      },
    ]);

    const triageRouterAgent = new Agent({
      name: 'Triage Router',
      instructions: 'Route coding queries to Code Specialist.',
      model: routerProvider,
      handoffs: [codeSpecialistAgent],
    });

    const runner = new Runner();
    const result = await runner.run(
      triageRouterAgent,
      'Can you write a python hello world function?'
    );

    // 1. Verify final text response came from Code Specialist
    expect(result.text).toBe('def hello(): return "Hello Python!"');

    // 2. Verify active agent at completion was Code Specialist
    expect(result.agent).toBe(codeSpecialistAgent);
    expect(result.agent.name).toBe('Code Specialist');

    // 3. Verify message trace contains handoff tool call and system persona transition
    const systemMessages = result.messages.filter((m) => m.role === 'system');
    expect(systemMessages).toHaveLength(2);
    expect(systemMessages[0].content).toContain('Route coding queries');
    expect(systemMessages[1].content).toContain(
      '[Agent Handoff] You are now acting as agent "Code Specialist"'
    );

    const toolMessages = result.messages.filter((m) => m.role === 'tool');
    expect(toolMessages).toHaveLength(1);
    expect(toolMessages[0].name).toBe('transfer_to_code_specialist');
    expect(JSON.parse(toolMessages[0].content)).toEqual({
      status: 'transferred',
      targetAgent: 'Code Specialist',
      reason: 'User asked a python coding question',
    });
  });

  it('should support explicit createHandoff with custom options', () => {
    const targetAgent = new Agent({
      name: 'Support Agent',
      instructions: 'Customer support',
      model: new ScriptedHandoffModelProvider([]),
    });

    const handoff = createHandoff(targetAgent, {
      name: 'route_to_support',
      description: 'Route to customer support team',
    });

    expect(handoff.tool.name).toBe('route_to_support');
    expect(handoff.tool.description).toBe('Route to customer support team');
    expect(handoff.tool.handoffTarget).toBe(targetAgent);
  });
});
