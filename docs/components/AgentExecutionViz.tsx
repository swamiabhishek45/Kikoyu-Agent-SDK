import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

type StepStatus = 'pending' | 'active' | 'done';

type TraceStep = {
  id: string;
  label: string;
  detail: string;
  kind: 'input' | 'runtime' | 'model' | 'tool' | 'output';
};

const DEMO_STEPS: TraceStep[] = [
  {
    id: 'input',
    label: 'User input',
    detail: '"What is the weather in Tokyo?"',
    kind: 'input',
  },
  {
    id: 'runner',
    label: 'Runner.run',
    detail: 'Agent "Weather Concierge" · tool loop iteration 1',
    kind: 'runtime',
  },
  {
    id: 'model',
    label: 'Model completion',
    detail: 'Tool call requested: get_weather',
    kind: 'model',
  },
  {
    id: 'tool',
    label: 'Tool execution',
    detail: 'get_weather({ location: "Tokyo" }) → 22°C, Sunny',
    kind: 'tool',
  },
  {
    id: 'output',
    label: 'Final output',
    detail: '"It is 22°C and sunny in Tokyo right now."',
    kind: 'output',
  },
];

const STATUS_LABEL: Record<StepStatus, string> = {
  pending: 'Waiting',
  active: 'Running',
  done: 'Completed',
};

function stepStatus(index: number, activeIndex: number): StepStatus {
  if (index < activeIndex) return 'done';
  if (index === activeIndex) return 'active';
  return 'pending';
}

export function AgentExecutionViz() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(-1);
  const [running, setRunning] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const runDemo = useCallback(() => {
    if (running) return;
    clearTimers();
    setRunning(true);
    setActiveIndex(-1);

    const stepMs = reduceMotion ? 0 : 650;
    DEMO_STEPS.forEach((_, i) => {
      const t = setTimeout(() => {
        setActiveIndex(i);
        if (i === DEMO_STEPS.length - 1) {
          const done = setTimeout(() => setRunning(false), stepMs || 200);
          timers.current.push(done);
        }
      }, (i + 1) * (stepMs || 120));
      timers.current.push(t);
    });
  }, [clearTimers, reduceMotion, running]);

  const reset = useCallback(() => {
    clearTimers();
    setRunning(false);
    setActiveIndex(-1);
  }, [clearTimers]);

  const allDone = activeIndex === DEMO_STEPS.length - 1 && !running;

  return (
    <div
      className="overflow-hidden rounded-xl border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)] shadow-2xl shadow-black/40"
      aria-label="Simulated agent execution trace"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--kikoyu-border)] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-[var(--kikoyu-text-muted)]">run trace</span>
          <span className="rounded border border-[var(--kikoyu-border)] px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--kikoyu-text-muted)]">
            Simulated
          </span>
        </div>
        <div className="flex items-center gap-2">
          {allDone && (
            <Button variant="ghost" size="sm" className="gap-1 font-mono text-xs" onClick={reset}>
              <RotateCcw className="h-3 w-3" />
              Reset
            </Button>
          )}
          <Button variant="primary" size="sm" className="gap-1.5 font-mono text-xs" onClick={runDemo} disabled={running}>
            <Play className="h-3 w-3" />
            {running ? 'Running…' : 'Run demo'}
          </Button>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[1fr_140px]">
        <ol className="space-y-0 p-4" aria-label="Execution steps">
          {DEMO_STEPS.map((step, index) => {
            const status = stepStatus(index, activeIndex);
            return (
              <li
                key={step.id}
                className={cn(
                  'relative flex gap-3 border-l border-[var(--kikoyu-border)] py-3 pl-4 first:pt-0 last:pb-0',
                  index === DEMO_STEPS.length - 1 && 'border-l-transparent'
                )}
              >
                <span
                  className={cn(
                    'absolute -left-[5px] top-4 h-2 w-2 rounded-full border-2 bg-[var(--kikoyu-bg-elevated)]',
                    status === 'done' && 'border-emerald-500 bg-emerald-500',
                    status === 'active' && 'border-brand bg-brand',
                    status === 'pending' && 'border-zinc-600'
                  )}
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-medium text-[var(--kikoyu-text)]">{step.label}</span>
                    <span
                      className={cn(
                        'rounded px-1.5 py-0.5 font-mono text-[10px]',
                        status === 'active' && 'bg-brand/15 text-brand',
                        status === 'done' && 'bg-emerald-500/10 text-emerald-400',
                        status === 'pending' && 'text-[var(--kikoyu-text-muted)]'
                      )}
                    >
                      {STATUS_LABEL[status]}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-[11px] leading-relaxed text-[var(--kikoyu-text-muted)] sm:text-xs">
                    {step.detail}
                  </p>
                </div>
                {status === 'active' && !reduceMotion && (
                  <motion.span
                    className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    aria-hidden
                  />
                )}
              </li>
            );
          })}
        </ol>

        <aside className="hidden border-l border-[var(--kikoyu-border)] bg-black/20 p-4 lg:block">
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--kikoyu-text-muted)]">Runtime</p>
          <dl className="mt-3 space-y-2 font-mono text-[11px]">
            <div>
              <dt className="text-[var(--kikoyu-text-muted)]">Agent</dt>
              <dd className="text-[var(--kikoyu-text)]">Weather Concierge</dd>
            </div>
            <div>
              <dt className="text-[var(--kikoyu-text-muted)]">Tools</dt>
              <dd className="text-brand">get_weather</dd>
            </div>
            <div>
              <dt className="text-[var(--kikoyu-text-muted)]">Events</dt>
              <dd className="text-[var(--kikoyu-text)]">tool_call_* · text_delta</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
