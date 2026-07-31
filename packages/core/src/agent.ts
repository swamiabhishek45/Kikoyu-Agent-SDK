import { AgentBuilder } from './agent-builder.js';
import type { Guardrail } from './guardrail.js';
import { createHandoff, type Handoff } from './handoff.js';
import { ToolRegistry } from './tool-registry.js';
import type { AgentConfig, ModelProvider, Tool } from './types.js';

export class Agent {
  readonly name: string;
  readonly instructions: string;
  readonly model: ModelProvider;
  readonly tools: Tool[];
  readonly toolRegistry: ToolRegistry;
  readonly guardrails: Guardrail[];
  readonly handoffs: Handoff[];

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
    this.tools = config.tools ? [...config.tools] : [];
    this.guardrails = config.guardrails ?? [];

    // Normalize handoffs
    const rawHandoffs = config.handoffs ?? [];
    this.handoffs = rawHandoffs.map((h) => {
      if (typeof h === 'object' && h !== null && 'instructions' in h && 'model' in h) {
        return createHandoff(h as Agent);
      }
      return h as Handoff;
    });

    // Combine standard tools and handoff tools into ToolRegistry
    const handoffTools = this.handoffs.map((h) => h.tool);
    this.toolRegistry = new ToolRegistry([...this.tools, ...handoffTools]);
  }

  static builder(): AgentBuilder {
    return new AgentBuilder();
  }
}
