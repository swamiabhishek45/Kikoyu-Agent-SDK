import type { AgentConfig, ModelProvider } from './types.js';

export class Agent {
  readonly name: string;
  readonly instructions: string;
  readonly model: ModelProvider;
  readonly tools: unknown[];
  readonly guardrails: unknown[];
  readonly handoffs: unknown[];

  constructor(config: AgentConfig) {
    if (!config.name || typeof config.name !== 'string') {
      throw new Error('Agent name must be a non-empty string');
    }
    if (!config.instructions || typeof config.instructions !== 'string') {
      throw new Error('Agent instructions must be a non-empty string');
    }
    if (!config.model) {
      throw new Error('Agent model must be provided');
    }

    this.name = config.name;
    this.instructions = config.instructions;
    this.model = config.model;
    this.tools = config.tools ?? [];
    this.guardrails = config.guardrails ?? [];
    this.handoffs = config.handoffs ?? [];
  }
}
