import React, { useState } from 'react';
import { Section, SectionHeader } from './ui/section';
import { Badge } from './ui/badge';
import { cn } from '../lib/utils';

const STAGES = [
  {
    id: 'input',
    label: 'Input',
    summary: 'Your application passes a user message (and optional session) into the runner.',
    detail: 'runner.run(agent, input, { session, context })',
  },
  {
    id: 'runtime',
    label: 'Agent runtime',
    summary: 'Runner loads agent config, tools, handoffs, and guardrails for the active agent.',
    detail: 'Agent.builder() → immutable Agent instance',
  },
  {
    id: 'model',
    label: 'Model call',
    summary: 'Messages and tool definitions are sent to the configured model provider.',
    detail: 'OpenAI · Anthropic · Gemini · FallbackProvider',
  },
  {
    id: 'tools',
    label: 'Tool loop',
    summary: 'When the model requests tools, arguments are validated and handlers execute. The loop continues until text is returned or limits are hit.',
    detail: 'tool_call_started → execute → tool_call_finished',
  },
  {
    id: 'output',
    label: 'Result',
    summary: 'RunResult includes final text, active agent, usage, and optional trace data.',
    detail: 'result.text · result.agent · RunTrace',
  },
] as const;

export function ExecutionLifecycle() {
  const [active, setActive] = useState<(typeof STAGES)[number]['id']>('input');
  const current = STAGES.find((s) => s.id === active) ?? STAGES[0];

  return (
    <Section className="border-y border-[var(--kikoyu-border)] bg-black/20">
      <SectionHeader>
        <Badge variant="outline" className="mb-1">
          Execution model
        </Badge>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-3xl">
          How a run moves through the SDK
        </h2>
        <p className="text-sm text-[var(--kikoyu-text-muted)] sm:text-base">
          Runs can branch via handoffs, repeat during tool loops, or stop early on guardrails — this is
          the common path for a single agent with tools.
        </p>
      </SectionHeader>

      <div className="mx-auto max-w-4xl">
        <div
          className="hidden items-stretch justify-between gap-2 md:flex"
          role="tablist"
          aria-label="Execution stages"
        >
          {STAGES.map((stage, index) => (
            <React.Fragment key={stage.id}>
              <button
                type="button"
                role="tab"
                aria-selected={active === stage.id}
                id={`stage-tab-${stage.id}`}
                aria-controls={`stage-panel-${stage.id}`}
                onClick={() => setActive(stage.id)}
                className={cn(
                  'flex-1 rounded-lg border px-3 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                  active === stage.id
                    ? 'border-brand/40 bg-brand/10'
                    : 'border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)] hover:border-zinc-600'
                )}
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--kikoyu-text-muted)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="mt-1 block text-sm font-medium text-[var(--kikoyu-text)]">{stage.label}</span>
              </button>
              {index < STAGES.length - 1 && (
                <span className="self-center text-[var(--kikoyu-text-muted)]" aria-hidden>
                  →
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <label htmlFor="lifecycle-select" className="sr-only">
            Select execution stage
          </label>
          <select
            id="lifecycle-select"
            value={active}
            onChange={(e) => setActive(e.target.value as (typeof STAGES)[number]['id'])}
            className="w-full rounded-lg border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)] px-3 py-2 text-sm text-[var(--kikoyu-text)]"
          >
            {STAGES.map((stage) => (
              <option key={stage.id} value={stage.id}>
                {stage.label}
              </option>
            ))}
          </select>
        </div>

        <div
          role="tabpanel"
          id={`stage-panel-${current.id}`}
          aria-labelledby={`stage-tab-${current.id}`}
          className="mt-6 rounded-xl border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)] p-6"
        >
          <h3 className="text-lg font-semibold text-[var(--kikoyu-text)]">{current.label}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--kikoyu-text-muted)]">{current.summary}</p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-[var(--kikoyu-border)] bg-black/30 p-4 font-mono text-xs text-brand">
            {current.detail}
          </pre>
        </div>
      </div>
    </Section>
  );
}
