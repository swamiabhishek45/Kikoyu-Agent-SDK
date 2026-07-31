import type { z } from 'zod';
import type { Agent } from './agent.js';
import type { Guardrail } from './guardrail.js';
import type { RunContext } from './run-context.js';

export type ModelRole = 'system' | 'user' | 'assistant' | 'tool';

export interface ToolCall {
  id: string;
  name: string;
  args: Record<string, unknown>;
}

export interface ToolResult {
  toolCallId: string;
  name: string;
  result?: unknown;
  error?: string;
}

export interface ModelMessage {
  role: ModelRole;
  content: string;
  name?: string;
  toolCallId?: string;
  toolCalls?: ToolCall[];
}

export interface TokenUsage {
  promptTokens?: number;
  completionTokens?: number;
  totalTokens?: number;
}

export interface ModelToolDefinition {
  name: string;
  description: string;
  parameters: Record<string, unknown>;
}

export interface ModelRequestOptions {
  temperature?: number;
  maxTokens?: number;
  stop?: string[];
  tools?: ModelToolDefinition[];
}

export interface ModelResponse {
  text: string;
  toolCalls?: ToolCall[];
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Tool<TSchema extends z.ZodTypeAny = any, TResult = any, TContext = any> {
  name: string;
  description: string;
  parameters: z.ZodTypeAny;
  execute: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    args: any,
    context: RunContext<TContext>
  ) => Promise<TResult> | TResult;
}

export interface AgentConfig {
  name: string;
  instructions: string;
  model: ModelProvider;
  tools?: Tool[];
  guardrails?: Guardrail[];

  // Reserved for future phases
  handoffs?: unknown[];
}

export interface RunResult {
  /** The final text response produced by the agent. */
  text: string;

  /** The complete list of messages (system prompt, user input, assistant trace, tool calls/results) generated during the run. */
  messages: ModelMessage[];

  /** Reference to the Agent instance that was executed. */
  agent: Agent;
}
