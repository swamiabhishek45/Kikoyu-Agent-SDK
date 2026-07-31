import { z } from 'zod';
import type { Agent } from './agent.js';
import { createTool } from './tool.js';
import type { Tool } from './types.js';

export interface HandoffOptions {
  name?: string;
  description?: string;
}

export interface Handoff {
  readonly target: Agent;
  readonly tool: Tool;
}

export function createHandoff(
  target: Agent,
  options?: HandoffOptions
): Handoff {
  if (!target) {
    throw new Error('Target Agent must be provided for handoff');
  }

  const toolName =
    options?.name ??
    `transfer_to_${target.name.toLowerCase().replace(/[^a-z0-9_]/g, '_')}`;

  const description =
    options?.description ??
    `Handoff task execution to agent "${target.name}". Agent instructions: ${target.instructions}`;

  const tool = createTool({
    name: toolName,
    description,
    parameters: z.object({
      reason: z
        .string()
        .optional()
        .describe('Explanation of why handoff is being initiated'),
    }),
    execute: async (args) => {
      return {
        status: 'transferred',
        targetAgent: target.name,
        reason: args.reason ?? 'No reason provided',
      };
    },
  });

  tool.handoffTarget = target;

  return {
    target,
    tool,
  };
}
