import React from 'react';
import Link from 'next/link';
import { Section, SectionHeader } from './ui/section';
import { Badge } from './ui/badge';

const CONTROLS = [
  {
    title: 'Tool approval',
    body: 'Pause before executing sensitive tools. Stream tool_approval_requested events and supply an approval handler on the runner.',
    href: '/api-reference/type-aliases/ToolApprovalHandler',
  },
  {
    title: 'Retries',
    body: 'Configure max model retries on the agent builder. Failed completions emit retry_attempted stream events.',
    href: '/api-reference/classes/AgentBuilder',
  },
  {
    title: 'Guardrails',
    body: 'Block or flag unsafe input before the tool loop proceeds. Guardrails run in parallel with the model request.',
    href: '/concepts/guardrails',
  },
  {
    title: 'Tracing',
    body: 'Collect RunTrace and StepTrace records for model calls, tool calls, handoffs, and guardrail outcomes.',
    href: '/concepts/tracing',
  },
  {
    title: 'Structured output',
    body: 'Parse and validate JSON against Zod schemas, with optional repair passes when the model drifts.',
    href: '/concepts/structured-output',
  },
  {
    title: 'RunContext',
    body: 'Pass userId, orgId, or custom fields into tool handlers without exposing them in prompts.',
    href: '/concepts/context',
  },
] as const;

export function ReliabilitySection() {
  return (
    <Section className="border-y border-[var(--kikoyu-border)] bg-black/20">
      <SectionHeader>
        <Badge variant="outline" className="mb-1">
          Control & observability
        </Badge>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-3xl">
          See what ran — and gate what should not
        </h2>
        <p className="text-sm text-[var(--kikoyu-text-muted)]">
          Built-in hooks for approval, retries, validation, and traces. You bring production policies
          and infrastructure around the SDK.
        </p>
      </SectionHeader>

      <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CONTROLS.map((item) => (
          <li key={item.title}>
            <Link
              href={item.href}
              className="block h-full rounded-xl border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)] p-5 no-underline transition-colors hover:border-zinc-600"
            >
              <h3 className="text-sm font-semibold text-[var(--kikoyu-text)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--kikoyu-text-muted)]">{item.body}</p>
              <span className="mt-3 inline-block font-mono text-xs text-brand">Read more →</span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
