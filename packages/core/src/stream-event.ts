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

export interface RunCompleteEvent {
  type: 'run_complete';
  result: RunResult;
}

export type StreamEvent =
  | TextDeltaEvent
  | ToolCallStartedEvent
  | ToolCallFinishedEvent
  | HandoffOccurredEvent
  | RunCompleteEvent;
