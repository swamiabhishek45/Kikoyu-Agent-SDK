import type { Agent } from './agent.js';

export type ModelRole = 'system' | 'user' | 'assistant';

export interface ModelMessage {
  role: ModelRole;
  content: string;
}

export interface TokenUsage {
  promptTokens?: number;
  completionTokens?: number;
  totalTokens?: number;
}

export interface ModelRequestOptions {
  temperature?: number;
  maxTokens?: number;
  stop?: string[];
}

export interface ModelResponse {
  text: string;
  finishReason?: string;
  usage?: TokenUsage;
}

export interface ModelProvider {
  readonly name: string;
  complete(
    messages: ModelMessage[],
    options?: ModelRequestOptions
  ): Promise<ModelResponse>;
}

export interface AgentConfig {
  name: string;
  instructions: string;
  model: ModelProvider;

  // Reserved for future phases
  tools?: unknown[];
  guardrails?: unknown[];
  handoffs?: unknown[];
}

export interface RunResult {
  /** The final text response produced by the agent. */
  text: string;

  /** The complete list of messages (system prompt, user input, assistant response) generated during the run. */
  messages: ModelMessage[];

  /** Reference to the Agent instance that was executed. */
  agent: Agent;
}
