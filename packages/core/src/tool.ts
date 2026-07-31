import type { z } from 'zod';
import type { Tool, ToolContext } from './types.js';

export function createTool<TSchema extends z.ZodType, TResult>(config: {
  name: string;
  description: string;
  parameters: TSchema;
  execute: (
    args: z.infer<TSchema>,
    context?: ToolContext
  ) => Promise<TResult> | TResult;
}): Tool<TSchema, TResult> {
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
    execute: config.execute,
  };
}
