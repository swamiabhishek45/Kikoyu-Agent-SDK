import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { Agent } from '../src/agent.js';
import { AgentBuilder } from '../src/agent-builder.js';
import { createGuardrail } from '../src/guardrail.js';
import { createTool } from '../src/tool.js';
import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
} from '../src/types.js';

class MockProvider implements ModelProvider {
  readonly name = 'mock';
  async complete(
    _messages: ModelMessage[],
    _options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    return { text: 'ok' };
  }
}

describe('AgentBuilder Fluent Builder', () => {
  it('should build an Agent using fluent method chaining', () => {
    const provider = new MockProvider();

    const tool = createTool({
      name: 'test_tool',
      description: 'Test tool',
      parameters: z.object({}),
      execute: () => 'result',
    });

    const guardrail = createGuardrail({
      name: 'test_guardrail',
      type: 'input',
      execute: () => ({ pass: true }),
    });

    const agent = new AgentBuilder()
      .setName('Fluent Agent')
      .setInstructions('Be helpful and fluent.')
      .setModel(provider)
      .addTool(tool)
      .withGuardrails(guardrail)
      .build();

    expect(agent.name).toBe('Fluent Agent');
    expect(agent.instructions).toBe('Be helpful and fluent.');
    expect(agent.model).toBe(provider);
    expect(agent.tools).toHaveLength(1);
    expect(agent.tools[0].name).toBe('test_tool');
    expect(agent.guardrails).toHaveLength(1);
  });

  it('should support Agent.builder() static helper', () => {
    const provider = new MockProvider();

    const agent = Agent.builder()
      .setName('Static Helper Agent')
      .setInstructions('Instructions')
      .setModel(provider)
      .build();

    expect(agent).toBeInstanceOf(Agent);
    expect(agent.name).toBe('Static Helper Agent');
  });

  it('should throw clear validation error when required fields are missing', () => {
    const builder = new AgentBuilder();

    expect(() => builder.build()).toThrow(
      'AgentBuilder validation failed: Missing required field(s): name, instructions, model.'
    );

    builder.setName('Partial Agent');
    expect(() => builder.build()).toThrow(
      'AgentBuilder validation failed: Missing required field(s): instructions, model.'
    );
  });
});
