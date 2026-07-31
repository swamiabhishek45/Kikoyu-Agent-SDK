import type { RunTrace, StepTrace, TokenUsage } from './types.js';

export class TraceCollector {
  private runId: string;
  private agentName: string;
  private startTime: Date;
  private steps: StepTrace[] = [];
  private totalUsage: Required<TokenUsage> = {
    promptTokens: 0,
    completionTokens: 0,
    totalTokens: 0,
  };

  constructor(agentName: string, runId?: string) {
    this.agentName = agentName;
    this.runId = runId ?? `run_${Math.random().toString(36).substring(2, 10)}`;
    this.startTime = new Date();
  }

  getRunId(): string {
    return this.runId;
  }

  addStep(
    type: StepTrace['type'],
    details: Record<string, unknown>,
    durationMs: number
  ): StepTrace {
    const step: StepTrace = {
      id: `step_${this.steps.length + 1}_${Math.random().toString(36).substring(2, 6)}`,
      type,
      timestamp: new Date().toISOString(),
      durationMs,
      details,
    };
    this.steps.push(step);
    return step;
  }

  recordTokenUsage(usage?: TokenUsage): void {
    if (!usage) return;
    if (usage.promptTokens) this.totalUsage.promptTokens += usage.promptTokens;
    if (usage.completionTokens) this.totalUsage.completionTokens += usage.completionTokens;
    if (usage.totalTokens) {
      this.totalUsage.totalTokens += usage.totalTokens;
    } else {
      this.totalUsage.totalTokens = this.totalUsage.promptTokens + this.totalUsage.completionTokens;
    }
  }

  exportTrace(
    finalStatus: RunTrace['finalStatus'],
    error?: string
  ): RunTrace {
    const endTime = new Date();
    const durationMs = endTime.getTime() - this.startTime.getTime();

    return {
      runId: this.runId,
      agentName: this.agentName,
      startTime: this.startTime.toISOString(),
      endTime: endTime.toISOString(),
      durationMs,
      totalTokenUsage: { ...this.totalUsage },
      steps: [...this.steps],
      finalStatus,
      error,
    };
  }
}
