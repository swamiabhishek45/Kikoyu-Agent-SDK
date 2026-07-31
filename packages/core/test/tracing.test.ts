import { describe, expect, it } from 'vitest';
import { TraceCollector } from '../src/tracing.js';

describe('Tracing & Metrics', () => {
  it('collects step traces and aggregates token metrics', () => {
    const tracer = new TraceCollector('TestAgent', 'custom-run-123');
    expect(tracer.getRunId()).toBe('custom-run-123');

    tracer.recordTokenUsage({ promptTokens: 100, completionTokens: 50, totalTokens: 150 });
    tracer.addStep('model_call', { provider: 'openai' }, 200);
    tracer.addStep('tool_call', { tool: 'calculator' }, 50);

    const trace = tracer.exportTrace('completed');
    expect(trace.runId).toBe('custom-run-123');
    expect(trace.agentName).toBe('TestAgent');
    expect(trace.totalTokenUsage.totalTokens).toBe(150);
    expect(trace.steps.length).toBe(2);
    expect(trace.finalStatus).toBe('completed');
    expect(trace.durationMs).toBeGreaterThanOrEqual(0);
  });
});
