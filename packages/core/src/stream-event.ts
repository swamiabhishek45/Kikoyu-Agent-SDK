import type { RunResult, ToolCall } from './types.js';

export interface TextDeltaEvent {
  type: 'text_delta';
  delta: string;
}

export interface ToolCallStartedEvent {
  type: 'tool_call_started';
  toolCall: ToolCall;
}

export interface ToolCallFinishedEvent {
  type: 'tool_call_finished';
  toolCallId: string;
  name: string;
  result: unknown;
  error?: string;
}

export interface HandoffOccurredEvent {
  type: 'handoff_occurred';
  fromAgent: string;
  toAgent: string;
}

export interface GuardrailTriggeredEvent {
  type: 'guardrail_triggered';
  name: string;
  guardrailType: 'input' | 'output';
  reasoning?: string;
}

export interface ToolApprovalRequestedEvent {
  type: 'tool_approval_requested';
  toolCallId: string;
  name: string;
  args: Record<string, unknown>;
  approved?: boolean;
}

export interface RetryAttemptedEvent {
  type: 'retry_attempted';
  attempt: number;
  maxRetries: number;
  reason: string;
}

export interface RunFailedEvent {
  type: 'run_failed';
  error: string;
}

export interface RunCompleteEvent {
  type: 'run_complete';
  result: RunResult;
}

export type StreamEvent =
  | TextDeltaEvent
  | ToolCallStartedEvent
  | ToolCallFinishedEvent
  | HandoffOccurredEvent
  | GuardrailTriggeredEvent
  | ToolApprovalRequestedEvent
  | RetryAttemptedEvent
  | RunFailedEvent
  | RunCompleteEvent;

