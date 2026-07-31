import { Agent } from './agent.js';
import type { Guardrail } from './guardrail.js';
import type { Handoff } from './handoff.js';
import type { ModelProvider, Tool } from './types.js';

export class AgentBuilder {
  private name?: string;
  private instructions?: string;
  private model?: ModelProvider;
  private tools: Tool[] = [];
  private guardrails: Guardrail[] = [];
  private handoffs: (Handoff | Agent)[] = [];

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setInstructions(instructions: string): this {
    this.instructions = instructions;
    return this;
  }

  setModel(model: ModelProvider): this {
    this.model = model;
    return this;
  }

  addTool(tool: Tool): this {
    this.tools.push(tool);
    return this;
  }

  addTools(...tools: Tool[]): this {
    this.tools.push(...tools);
    return this;
  }

  withGuardrails(...guardrails: Guardrail[]): this {
    this.guardrails.push(...guardrails);
    return this;
  }

  withHandoffs(...handoffs: (Handoff | Agent)[]): this {
    this.handoffs.push(...handoffs);
    return this;
  }

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
