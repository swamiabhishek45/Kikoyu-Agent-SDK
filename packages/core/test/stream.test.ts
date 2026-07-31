import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { Agent } from '../src/agent.js';
import { Runner } from '../src/runner.js';
import type { StreamEvent } from '../src/stream-event.js';
import { createTool } from '../src/tool.js';
import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
  ModelStreamChunk,
} from '../src/types.js';

class ScriptedStreamMockProvider implements ModelProvider {
  readonly name = 'scripted-stream-mock';
  private callCount = 0;

  async complete(
    messages: ModelMessage[],
    options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    const chunks: ModelResponse[] = [];
    for await (const chunk of this.streamComplete(messages, options)) {
      if (chunk.delta) {
        chunks.push({ text: chunk.delta });
      }
      if (chunk.toolCalls) {
        chunks.push({ text: '', toolCalls: chunk.toolCalls });
      }
    }
    const text = chunks.map((c) => c.text).join('');
    const toolCalls = chunks.find((c) => c.toolCalls)?.toolCalls;
    return { text, toolCalls };
  }

  async *streamComplete(
    _messages: ModelMessage[],
    _options?: ModelRequestOptions
  ): AsyncIterable<ModelStreamChunk> {
    this.callCount++;

    if (this.callCount === 1) {
      // Turn 1: Model streams tool call
      yield {
        toolCalls: [
          {
            id: 'call_calc_42',
            name: 'calculate',
            args: { expression: '21 * 2' },
          },
        ],
      };
    } else {
      // Turn 2: Model streams final text deltas
      yield { delta: 'The answer ' };
      yield { delta: 'is 42.' };
    }
  }
}

describe('Runner Streaming Output', () => {
  it('should yield correct sequence of StreamEvents for a run with a tool call', async () => {
    const calcTool = createTool({
      name: 'calculate',
      description: 'Evaluate math expression',
      parameters: z.object({ expression: z.string() }),
      execute: async () => 42,
    });

    const mockProvider = new ScriptedStreamMockProvider();

    const agent = new Agent({
      name: 'Calculator Agent',
      instructions: 'Use calculate tool.',
      model: mockProvider,
      tools: [calcTool],
    });

    const runner = new Runner();
    const events: StreamEvent[] = [];

    for await (const event of runner.stream(agent, 'What is 21 * 2?')) {
      events.push(event);
    }

    const eventTypes = events.map((e) => e.type);

    expect(eventTypes).toEqual([
      'tool_call_started',
      'tool_call_finished',
      'text_delta',
      'text_delta',
      'run_complete',
    ]);

    // Check tool_call_started payload
    expect(events[0].type).toBe('tool_call_started');
    if (events[0].type === 'tool_call_started') {
      expect(events[0].toolCall.name).toBe('calculate');
    }

    // Check tool_call_finished payload
    expect(events[1].type).toBe('tool_call_finished');
    if (events[1].type === 'tool_call_finished') {
      expect(events[1].result).toBe(42);
    }

    // Check text_delta payloads
    expect(events[2].type).toBe('text_delta');
    if (events[2].type === 'text_delta') {
      expect(events[2].delta).toBe('The answer ');
    }

    expect(events[3].type).toBe('text_delta');
    if (events[3].type === 'text_delta') {
      expect(events[3].delta).toBe('is 42.');
    }

    // Check run_complete payload
    expect(events[4].type).toBe('run_complete');
    if (events[4].type === 'run_complete') {
      expect(events[4].result.text).toBe('The answer is 42.');
    }
  });

  it('should allow Runner.run to drain stream seamlessly', async () => {
    const mockProvider = new ScriptedStreamMockProvider();

    const agent = new Agent({
      name: 'Calculator Agent',
      instructions: 'Use calculate tool.',
      model: mockProvider,
      tools: [
        createTool({
          name: 'calculate',
          description: 'Evaluate math expression',
          parameters: z.object({ expression: z.string() }),
          execute: () => 42,
        }),
      ],
    });

    const runner = new Runner();
    const result = await runner.run(agent, 'Calculate 21 * 2');

    expect(result.text).toBe('The answer is 42.');
  });
});
