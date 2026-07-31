import { AgentBuilder } from './agent-builder.js';
import type { Guardrail } from './guardrail.js';
import { createHandoff, type Handoff } from './handoff.js';
import { ToolRegistry } from './tool-registry.js';
import type { AgentConfig, ModelProvider, Tool } from './types.js';

/**
 * Immutable configuration holder for an AI Agent.
 *
 * All execution logic is driven by {@link Runner}, while the Agent holds instructions,
 * attached tools, guardrails, and handoffs.
 *
 * @example
 * ```typescript
 * const agent = new Agent({
 *   name: 'Assistant',
 *   instructions: 'You are a helpful AI assistant.',
 *   model: new OpenAIProvider(),
 * });
 * ```
 */
export class Agent {
  /** The unique display name of the agent */
  readonly name: string;

  /** The system instructions describing the agent's persona and instructions */
  readonly instructions: string;

  /** The model provider driving the agent */
  readonly model: ModelProvider;

  /** List of standard tools attached to the agent */
  readonly tools: Tool[];

  /** ToolRegistry maintaining all tools and handoff tools */
  readonly toolRegistry: ToolRegistry;

  /** List of input and output guardrails */
  readonly guardrails: Guardrail[];

  /** List of registered handoffs to other agents */
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

    const rawHandoffs = config.handoffs ?? [];
    this.handoffs = rawHandoffs.map((h) => {
      if (typeof h === 'object' && h !== null && 'instructions' in h && 'model' in h) {
        return createHandoff(h as Agent);
      }
      return h as Handoff;
    });

    const handoffTools = this.handoffs.map((h) => h.tool);
    this.toolRegistry = new ToolRegistry([...this.tools, ...handoffTools]);
  }

  /**
   * Creates a new fluent {@link AgentBuilder} instance.
   *
   * @returns A fresh AgentBuilder for method chaining.
   */
  static builder(): AgentBuilder {
    return new AgentBuilder();
  }
}
