import type { z } from 'zod';
import type { RunContext } from './run-context.js';
import type { Tool } from './types.js';

export function createTool<
  TSchema extends z.ZodTypeAny,
  TResult,
  TContext = Record<string, unknown>
>(config: {
  name: string;
  description: string;
  parameters: TSchema;
  requiresApproval?: boolean | ((args: z.infer<TSchema>) => boolean);
  execute: (
    args: z.infer<TSchema>,
    context: RunContext<TContext>
  ) => Promise<TResult> | TResult;
}): Tool<TSchema, TResult, TContext> {
  if (!config.name || typeof config.name !== 'string') {
    throw new Error('Tool name must be a non-empty string');
  }
  if (!config.description || typeof config.description !== 'string') {
    throw new Error('Tool description must be a non-empty string');
  }
  if (!config.parameters) {
    throw new Error('Tool parameters schema must be provided');
  }
  if (typeof config.execute !== 'function') {
    throw new Error('Tool execute must be a function');
  }

  return {
    name: config.name,
    description: config.description,
    parameters: config.parameters,
    requiresApproval: config.requiresApproval,
    execute: config.execute,
  };
}

