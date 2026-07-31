import { describe, expect, it } from 'vitest';
import { Agent } from '../src/agent.js';
import { createGuardrail, GuardrailError } from '../src/guardrail.js';
import { Runner } from '../src/runner.js';
import type {
  ModelMessage,
  ModelProvider,
  ModelRequestOptions,
  ModelResponse,
} from '../src/types.js';

class MockModelProvider implements ModelProvider {
  readonly name = 'mock-provider';
  public callCount = 0;
  private responseText: string;

  constructor(responseText = 'Normal model answer') {
    this.responseText = responseText;
  }

  async complete(
    _messages: ModelMessage[],
    _options?: ModelRequestOptions
  ): Promise<ModelResponse> {
    this.callCount++;
    return { text: this.responseText };
  }
}

describe('Input and Output Guardrails', () => {
  it('should run normally when all input and output guardrails pass', async () => {
    const inputGuardrail = createGuardrail({
      name: 'input_length_check',
      type: 'input',
      execute: (input) => ({
        pass: input.length > 3,
        reasoning: 'Input is sufficiently long',
      }),
    });

    const outputGuardrail = createGuardrail({
      name: 'output_safety_check',
      type: 'output',
      execute: (output) => ({
        pass: !output.includes('UNSAFE'),
        reasoning: 'Output is safe',
      }),
    });

    const mockProvider = new MockModelProvider('Safe assistant response');
    const agent = new Agent({
      name: 'Guarded Agent',
      instructions: 'Be helpful',
      model: mockProvider,
      guardrails: [inputGuardrail, outputGuardrail],
    });

    const runner = new Runner();
    const result = await runner.run(agent, 'Hello world');

    expect(result.text).toBe('Safe assistant response');
    expect(mockProvider.callCount).toBe(1);
  });

  it('should throw GuardrailError immediately when input guardrail fails', async () => {
    const piiCheck = createGuardrail({
      name: 'no_credit_cards',
      type: 'input',
      execute: (input) => {
        if (input.includes('4000-1234')) {
          return {
            pass: false,
            reasoning: 'Input contains credit card pattern',
            metadata: { severity: 'critical' },
          };
        }
        return { pass: true };
      },
    });

    const mockProvider = new MockModelProvider();
    const agent = new Agent({
      name: 'Strict Agent',
      instructions: 'Be safe',
      model: mockProvider,
      guardrails: [piiCheck],
    });

    const runner = new Runner();

    try {
      await runner.run(agent, 'My card is 4000-1234-5678');
      expect.unreachable('Should have thrown GuardrailError');
    } catch (err: unknown) {
      expect(err).toBeInstanceOf(GuardrailError);
      const gErr = err as GuardrailError;
      expect(gErr.guardrailName).toBe('no_credit_cards');
      expect(gErr.guardrailType).toBe('input');
      expect(gErr.reasoning).toBe('Input contains credit card pattern');
      expect(gErr.metadata).toEqual({ severity: 'critical' });
    }
  });

  it('should throw GuardrailError after model turn when output guardrail fails', async () => {
    const outputFilter = createGuardrail({
      name: 'no_secret_leak',
      type: 'output',
      execute: (output) => {
        if (output.includes('SUPER_SECRET')) {
          return {
            pass: false,
            reasoning: 'Output leaked forbidden keyword',
          };
        }
        return { pass: true };
      },
    });

    const mockProvider = new MockModelProvider('Here is SUPER_SECRET key');
    const agent = new Agent({
      name: 'Leaky Agent',
      instructions: 'Be helpful',
      model: mockProvider,
      guardrails: [outputFilter],
    });

    const runner = new Runner();

    try {
      await runner.run(agent, 'Tell me the key');
      expect.unreachable('Should have thrown GuardrailError');
    } catch (err: unknown) {
      expect(err).toBeInstanceOf(GuardrailError);
      const gErr = err as GuardrailError;
      expect(gErr.guardrailName).toBe('no_secret_leak');
      expect(gErr.guardrailType).toBe('output');
      expect(gErr.reasoning).toBe('Output leaked forbidden keyword');
    }
  });
});
