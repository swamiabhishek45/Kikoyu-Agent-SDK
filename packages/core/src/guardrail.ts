import type { RunContext } from './run-context.js';

export type GuardrailType = 'input' | 'output';

export interface GuardrailResult {
  pass: boolean;
  reasoning?: string;
  metadata?: Record<string, unknown>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GuardrailFunction<TContext = any> = (
  target: string,
  context: RunContext<TContext>
) => Promise<GuardrailResult> | GuardrailResult;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Guardrail<TContext = any> {
  name: string;
  type: GuardrailType;
  execute: GuardrailFunction<TContext>;
}

export class GuardrailError extends Error {
  readonly guardrailName: string;
  readonly guardrailType: GuardrailType;
  readonly reasoning?: string;
  readonly metadata?: Record<string, unknown>;

  constructor(
    guardrailName: string,
    guardrailType: GuardrailType,
    reasoning?: string,
    metadata?: Record<string, unknown>
  ) {
    super(
      `Guardrail "${guardrailName}" [${guardrailType}] tripped: ${
        reasoning ?? 'No reasoning provided'
      }`
    );
    this.name = 'GuardrailError';
    this.guardrailName = guardrailName;
    this.guardrailType = guardrailType;
    this.reasoning = reasoning;
    this.metadata = metadata;
  }
}

export function createGuardrail<TContext = Record<string, unknown>>(config: {
  name: string;
  type: GuardrailType;
  execute: GuardrailFunction<TContext>;
}): Guardrail<TContext> {
  if (!config.name || typeof config.name !== 'string') {
    throw new Error('Guardrail name must be a non-empty string');
  }
  if (config.type !== 'input' && config.type !== 'output') {
    throw new Error('Guardrail type must be either "input" or "output"');
  }
  if (typeof config.execute !== 'function') {
    throw new Error('Guardrail execute must be a function');
  }

  return {
    name: config.name,
    type: config.type,
    execute: config.execute,
  };
}
