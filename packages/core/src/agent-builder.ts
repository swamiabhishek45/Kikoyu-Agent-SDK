import { Agent } from './agent.js';
import type { Guardrail } from './guardrail.js';
import type { Handoff } from './handoff.js';
import { OpenAIProvider } from './providers/openai.js';
import type { ModelProvider, Tool } from './types.js';

/**
 * Fluent builder for constructing validated {@link Agent} instances using method chaining.
 *
 * @example
 * ```typescript
 * const agent = Agent.builder()
 *   .setName('Support Agent')
 *   .setInstructions('Help users resolve issues.')
 *   .setApiKey(process.env.KIKOYU_API_KEY)
 *   .addTool(myTool)
 *   .build();
 * ```
 */
export class AgentBuilder {
  private name?: string;
  private instructions?: string;
  private model?: ModelProvider;
  private tools: Tool[] = [];
  private guardrails: Guardrail[] = [];
  private handoffs: (Handoff | Agent)[] = [];

  /**
   * Sets the agent's display name.
   * @param name - Non-empty string name for the agent.
   */
  setName(name: string): this {
    this.name = name;
    return this;
  }

  /**
   * Sets the system instructions / persona prompt.
   * @param instructions - Detailed instructions for the agent.
   */
  setInstructions(instructions: string): this {
    this.instructions = instructions;
    return this;
  }

  /**
   * Configures the ModelProvider instance.
   * @param model - ModelProvider implementation (e.g. OpenAIProvider).
   */
  setModel(model: ModelProvider): this {
    this.model = model;
    return this;
  }

  /**
   * Convenience helper to set up OpenAIProvider / Kikoyu API Key.
   * @param apiKey - API key string.
   */
  setApiKey(apiKey: string): this {
    this.model = new OpenAIProvider({ apiKey });
    return this;
  }

  /**
   * Attaches a single tool to the agent.
   * @param tool - Tool definition.
   */
  addTool(tool: Tool): this {
    this.tools.push(tool);
    return this;
  }

  /**
   * Attaches multiple tools to the agent.
   * @param tools - Array of tool definitions.
   */
  addTools(...tools: Tool[]): this {
    this.tools.push(...tools);
    return this;
  }

  /**
   * Attaches input or output guardrails to the agent.
   * @param guardrails - Guardrail instances.
   */
  withGuardrails(...guardrails: Guardrail[]): this {
    this.guardrails.push(...guardrails);
    return this;
  }

  /**
   * Attaches handoffs to other target agents.
   * @param handoffs - Handoff or target Agent instances.
   */
  withHandoffs(...handoffs: (Handoff | Agent)[]): this {
    this.handoffs.push(...handoffs);
    return this;
  }

  /**
   * Validates required configuration fields and builds an immutable {@link Agent}.
   * @throws Error if name, instructions, or model are missing.
   */
  build(): Agent {
    const missing: string[] = [];
    if (!this.name || typeof this.name !== 'string' || this.name.trim() === '') {
      missing.push('name');
    }
    if (
      !this.instructions ||
      typeof this.instructions !== 'string' ||
      this.instructions.trim() === ''
    ) {
      missing.push('instructions');
    }
    if (!this.model) {
      missing.push('model');
    }

    if (missing.length > 0) {
      throw new Error(
        `AgentBuilder validation failed: Missing required field(s): ${missing.join(
          ', '
        )}.`
      );
    }

    return new Agent({
      name: this.name!,
      instructions: this.instructions!,
      model: this.model!,
      tools: this.tools,
      guardrails: this.guardrails,
      handoffs: this.handoffs,
    });
  }
}
