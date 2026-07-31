import { Agent, createTool, Runner, z } from '@kikoyu/core';
import { beforeEach, describe, expect, it } from 'vitest';
import { POST as registerHandler } from '../app/api/agents/register/route.js';
import { POST as runHandler } from '../app/api/agents/run/route.js';
import { POST as streamHandler } from '../app/api/agents/stream/route.js';
import { agentRegistry } from '../lib/agent-registry.js';
import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
} from '@kikoyu/core';

class MockModelProvider implements ModelProvider {
  readonly name = 'mock';
  private callCount = 0;

  async complete(
    _messages: ModelMessage[],
    _options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    this.callCount++;
    if (this.callCount === 1) {
      return {
        text: '',
        toolCalls: [{ id: 'call_1', name: 'mock_calc', args: {} }],
      };
    }
    return { text: 'Calculated result is 42.' };
  }
}

describe('Next.js HTTP API Routes', () => {
  beforeEach(() => {
    agentRegistry.clear();
  });

  const validHeaders = {
    'Content-Type': 'application/json',
    'x-api-key': 'kikoyu-secret-key',
  };

  it('should return 401 Unauthorized when API key is missing or invalid', async () => {
    const req = new Request('http://localhost:3000/api/agents/run', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: 'hello' }),
    });

    const res = await runHandler(req);
    expect(res.status).toBe(401);
    const body = await res.json();
    expect(body.error).toBe('Unauthorized');
  });

  it('should register an agent and execute run by agentId', async () => {
    const mockAgent = Agent.builder()
      .setName('Registered Bot')
      .setInstructions('Helpful bot')
      .setModel(new MockModelProvider())
      .build();

    agentRegistry.register('bot_123', mockAgent);

    const req = new Request('http://localhost:3000/api/agents/run', {
      method: 'POST',
      headers: validHeaders,
      body: JSON.stringify({
        agentId: 'bot_123',
        input: 'Run test',
      }),
    });

    const res = await runHandler(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.agentName).toBe('Registered Bot');
  });

  it('should execute POST /api/agents/run with inline agent and complete full tool call round trip', async () => {
    const mockAgent = Agent.builder()
      .setName('Tool Bot')
      .setInstructions('Use tool')
      .setModel(new MockModelProvider())
      .addTool(
        createTool({
          name: 'mock_calc',
          description: 'Mock calculator',
          parameters: z.object({}),
          execute: () => 42,
        })
      )
      .build();

    // Register temporary for resolution test
    agentRegistry.register('tool_bot', mockAgent);

    const req = new Request('http://localhost:3000/api/agents/run', {
      method: 'POST',
      headers: validHeaders,
      body: JSON.stringify({
        agentId: 'tool_bot',
        input: 'Perform calculation',
      }),
    });

    const res = await runHandler(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.text).toBe('Calculated result is 42.');
    expect(body.messages).toHaveLength(5);
  });

  it('should stream events over SSE via POST /api/agents/stream', async () => {
    const mockAgent = Agent.builder()
      .setName('Stream Bot')
      .setInstructions('Stream helper')
      .setModel(new MockModelProvider())
      .addTool(
        createTool({
          name: 'mock_calc',
          description: 'Mock calc',
          parameters: z.object({}),
          execute: () => 42,
        })
      )
      .build();

    agentRegistry.register('stream_bot', mockAgent);

    const req = new Request('http://localhost:3000/api/agents/stream', {
      method: 'POST',
      headers: validHeaders,
      body: JSON.stringify({
        agentId: 'stream_bot',
        input: 'Calculate something',
      }),
    });

    const res = await streamHandler(req);
    expect(res.status).toBe(200);
    expect(res.headers.get('Content-Type')).toBe('text/event-stream');

    const text = await res.text();
    expect(text).toContain('tool_call_started');
    expect(text).toContain('tool_call_finished');
    expect(text).toContain('run_complete');
  });
});
