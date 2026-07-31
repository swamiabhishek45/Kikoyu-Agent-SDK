import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { Agent } from '../src/agent.js';
import { Runner } from '../src/runner.js';
import { createTool } from '../src/tool.js';
import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
} from '../src/types.js';

class ScriptedMockModelProvider implements ModelProvider {
  readonly name = 'scripted-mock-provider';
  private responses: ModelResponse[];
  private callCount = 0;
  public receivedMessagesHistory: ModelMessage[][] = [];

  constructor(responses: ModelResponse[]) {
    this.responses = responses;
  }

  async complete(
    messages: ModelMessage[],
    _options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    this.receivedMessagesHistory.push([...messages]);
    const response = this.responses[this.callCount];
    this.callCount++;

    if (!response) {
      return { text: 'Default mock response' };
    }
    return response;
  }
}

describe('Runner Tool Loop with Scripted Mock ModelProvider', () => {
  it('should execute tool call on turn 1, feed back result, and return final answer on turn 2', async () => {
    const getWeatherTool = createTool({
      name: 'get_weather',
      description: 'Get weather for a location',
      parameters: z.object({
        location: z.string(),
      }),
      execute: async ({ location }) => {
        return { location, temperature: '22°C', condition: 'Sunny' };
      },
    });

    const mockProvider = new ScriptedMockModelProvider([
      // Turn 1: model returns a tool call
      {
        text: '',
        toolCalls: [
          {
            id: 'call_abc123',
            name: 'get_weather',
            args: { location: 'Tokyo' },
          },
        ],
      },
      // Turn 2: model receives tool output and returns final text answer
      {
        text: 'The weather in Tokyo is currently 22°C and Sunny.',
      },
    ]);

    const agent = new Agent({
      name: 'Weather Assistant',
      instructions: 'You help people find weather information using tools.',
      model: mockProvider,
      tools: [getWeatherTool],
    });

    const runner = new Runner();
    const result = await runner.run(agent, 'What is the weather in Tokyo?');

    expect(result.text).toBe('The weather in Tokyo is currently 22°C and Sunny.');
    expect(result.messages).toHaveLength(5);

    // Message trace order check:
    // 0: system
    // 1: user
    // 2: assistant (with toolCall)
    // 3: tool (with result)
    // 4: assistant (final text)
    expect(result.messages[0].role).toBe('system');
    expect(result.messages[1].role).toBe('user');
    expect(result.messages[2].role).toBe('assistant');
    expect(result.messages[2].toolCalls).toHaveLength(1);
    expect(result.messages[2].toolCalls?.[0].name).toBe('get_weather');

    expect(result.messages[3].role).toBe('tool');
    expect(result.messages[3].name).toBe('get_weather');
    expect(result.messages[3].toolCallId).toBe('call_abc123');
    expect(JSON.parse(result.messages[3].content)).toEqual({
      location: 'Tokyo',
      temperature: '22°C',
      condition: 'Sunny',
    });

    expect(result.messages[4].role).toBe('assistant');
    expect(result.messages[4].content).toBe(
      'The weather in Tokyo is currently 22°C and Sunny.'
    );
  });

  it('should catch tool execution error and feed error message back to model', async () => {
    const failingTool = createTool({
      name: 'buggy_tool',
      description: 'A tool that fails',
      parameters: z.object({}),
      execute: () => {
        throw new Error('Database connection failed');
      },
    });

    const mockProvider = new ScriptedMockModelProvider([
      {
        text: '',
        toolCalls: [{ id: 'call_fail', name: 'buggy_tool', args: {} }],
      },
      {
        text: 'I encountered an error accessing the database.',
      },
    ]);

    const agent = new Agent({
      name: 'Resilient Agent',
      instructions: 'Handle errors gracefully.',
      model: mockProvider,
      tools: [failingTool],
    });

    const runner = new Runner();
    const result = await runner.run(agent, 'Run buggy tool');

    expect(result.text).toBe('I encountered an error accessing the database.');
    expect(result.messages[3].role).toBe('tool');
    expect(result.messages[3].content).toContain('Database connection failed');
  });

  it('should enforce maxIterations safety limit', async () => {
    const infiniteTool = createTool({
      name: 'loop_tool',
      description: 'Tool that causes loop',
      parameters: z.object({}),
      execute: () => 'ok',
    });

    // Provider that always requests a tool call
    const infiniteProvider = new ScriptedMockModelProvider([
      { text: '', toolCalls: [{ id: '1', name: 'loop_tool', args: {} }] },
      { text: '', toolCalls: [{ id: '2', name: 'loop_tool', args: {} }] },
      { text: '', toolCalls: [{ id: '3', name: 'loop_tool', args: {} }] },
    ]);

    const agent = new Agent({
      name: 'Looping Agent',
      instructions: 'Loop forever',
      model: infiniteProvider,
      tools: [infiniteTool],
    });

    const runner = new Runner();
    await expect(
      runner.run(agent, 'Loop', { maxIterations: 2 })
    ).rejects.toThrow('Agent execution loop exceeded maximum iterations limit (2).');
  });
});
