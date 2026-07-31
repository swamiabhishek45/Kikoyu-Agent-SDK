import { describe, expect, it, vi } from 'vitest';
import { Agent } from '../src/agent.js';
import { Runner } from '../src/runner.js';
import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
} from '../src/types.js';

class MockModelProvider implements ModelProvider {
  readonly name = 'mock-provider';
  public lastReceivedMessages: ModelMessage[] = [];
  public mockResponseText: string;

  constructor(responseText = 'Hello! I am a helpful mock assistant.') {
    this.mockResponseText = responseText;
  }

  async complete(
    messages: ModelMessage[],
    _options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    this.lastReceivedMessages = [...messages];
    return {
      text: this.mockResponseText,
      usage: { promptTokens: 10, completionTokens: 8, totalTokens: 18 },
    };
  }
}

describe('Runner with Mocked ModelProvider', () => {
  it('should run an agent with string input and return text, messages, and agent', async () => {
    const mockProvider = new MockModelProvider('Paris is the capital of France.');

    const agent = new Agent({
      name: 'Geography Bot',
      instructions: 'You are a helpful geography assistant.',
      model: mockProvider,
    });

    const runner = new Runner();
    const result = await runner.run(agent, 'What is the capital of France?');

    expect(result.text).toBe('Paris is the capital of France.');
    expect(result.agent).toBe(agent);
    expect(result.messages).toHaveLength(3);

    expect(result.messages[0]).toEqual({
      role: 'system',
      content: 'You are a helpful geography assistant.',
    });

    expect(result.messages[1]).toEqual({
      role: 'user',
      content: 'What is the capital of France?',
    });

    expect(result.messages[2]).toEqual({
      role: 'assistant',
      content: 'Paris is the capital of France.',
    });
  });

  it('should validate invalid Agent initialization', () => {
    const mockProvider = new MockModelProvider();

    expect(
      () =>
        new Agent({
          name: '',
          instructions: 'instructions',
          model: mockProvider,
        })
    ).toThrow('Agent name must be a non-empty string');

    expect(
      () =>
        new Agent({
          name: 'Bot',
          instructions: '',
          model: mockProvider,
        })
    ).toThrow('Agent instructions must be a non-empty string');
  });
});
