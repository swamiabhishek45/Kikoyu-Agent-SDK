import { describe, expect, it } from 'vitest';
import { Agent } from '../src/agent.js';
import { InMemoryStore } from '../src/memory.js';
import { Runner } from '../src/runner.js';
import { Session } from '../src/session.js';
import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
} from '../src/types.js';

class HistoryRecordingMockProvider implements ModelProvider {
  readonly name = 'history-recording-mock';
  public completions: ModelMessage[][] = [];

  async complete(
    messages: ModelMessage[],
    _options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    this.completions.push([...messages]);

    const lastMessage = messages[messages.length - 1];

    if (lastMessage.content.includes('Alice')) {
      return { text: 'Nice to meet you, Alice!' };
    }

    if (lastMessage.content.includes('What is my name?')) {
      const mentionsAlice = messages.some((m) => m.content.includes('Alice'));
      if (mentionsAlice) {
        return { text: 'Your name is Alice.' };
      }
      return { text: 'I do not know your name.' };
    }

    return { text: 'Response' };
  }
}

describe('Session and Persistent Memory', () => {
  it('should persist turn history across sequential Runner.run calls with the same Session', async () => {
    const memoryStore = new InMemoryStore();
    const session = new Session({ sessionId: 'user_session_101', store: memoryStore });

    const mockProvider = new HistoryRecordingMockProvider();

    const agent = new Agent({
      name: 'Memory Agent',
      instructions: 'Remember information across conversation turns.',
      model: mockProvider,
    });

    const runner = new Runner();

    // Turn 1: Introduce user
    const res1 = await runner.run(agent, 'Hi, my name is Alice', { session });
    expect(res1.text).toBe('Nice to meet you, Alice!');

    // Turn 2: Ask question relying on Turn 1 context
    const res2 = await runner.run(agent, 'What is my name?', { session });
    expect(res2.text).toBe('Your name is Alice.');

    // Verify Provider received history in turn 2 request
    const secondTurnMessages = mockProvider.completions[1];
    expect(secondTurnMessages).toBeDefined();

    // Message trace in turn 2 should contain:
    // [0] system instruction
    // [1] user turn 1 ("Hi, my name is Alice")
    // [2] assistant turn 1 ("Nice to meet you, Alice!")
    // [3] user turn 2 ("What is my name?")
    expect(secondTurnMessages[1].content).toBe('Hi, my name is Alice');
    expect(secondTurnMessages[2].content).toBe('Nice to meet you, Alice!');
    expect(secondTurnMessages[3].content).toBe('What is my name?');

    // Verify stored messages in Session
    const storedMessages = await session.getMessages();
    expect(storedMessages).toHaveLength(4);
    expect(storedMessages[0].content).toBe('Hi, my name is Alice');
    expect(storedMessages[1].content).toBe('Nice to meet you, Alice!');
    expect(storedMessages[2].content).toBe('What is my name?');
    expect(storedMessages[3].content).toBe('Your name is Alice.');
  });
});
