import React from 'react';
import Link from 'next/link';
import { Section, SectionHeader } from './ui/section';
import { Badge } from './ui/badge';

const NODES = [
  { id: 'app', label: 'Your application', sub: 'HTTP, CLI, jobs' },
  { id: 'runner', label: 'Runner', sub: 'run · stream' },
  { id: 'agent', label: 'Agent', sub: 'tools · handoffs · guardrails' },
  { id: 'provider', label: 'Model provider', sub: 'OpenAI · Anthropic · Gemini' },
] as const;

const SIDECAR = [
  { label: 'MemoryStore', href: '/concepts/sessions', note: 'Session turn history' },
  { label: 'RunContext', href: '/concepts/context', note: 'Scoped metadata for tools' },
  { label: 'TraceCollector', href: '/concepts/tracing', note: 'Step-level run traces' },
  { label: '@kikoyu/api', href: 'https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/tree/main/packages/api', note: 'Optional HTTP API', external: true },
] as const;

export function ArchitectureSection() {
  return (
    <Section>
      <SectionHeader>
        <Badge variant="outline" className="mb-1">
          Architecture
        </Badge>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-3xl">
          A small runtime, optional HTTP layer
        </h2>
        <p className="text-sm text-[var(--kikoyu-text-muted)] sm:text-base">
          Core execution lives in <code className="font-mono text-xs">@kikoyu/core</code>. Deploy your
          own app or use the bundled Next.js API package for run and stream endpoints.
        </p>
      </SectionHeader>

      <div className="mx-auto max-w-4xl">
        <div className="overflow-x-auto rounded-xl border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)] p-6">
          <div className="flex min-w-[520px] flex-wrap items-center justify-center gap-2 md:gap-3">
            {NODES.map((node, i) => (
              <React.Fragment key={node.id}>
                <div className="min-w-[120px] rounded-lg border border-[var(--kikoyu-border)] bg-black/25 px-4 py-3 text-center">
                  <p className="text-sm font-medium text-[var(--kikoyu-text)]">{node.label}</p>
                  <p className="mt-1 font-mono text-[10px] text-[var(--kikoyu-text-muted)]">{node.sub}</p>
                </div>
                {i < NODES.length - 1 && (
                  <span className="text-[var(--kikoyu-text-muted)]" aria-hidden>
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {SIDECAR.map((item) => (
              <div
                key={item.label}
                className="flex items-start justify-between gap-3 rounded-lg border border-dashed border-[var(--kikoyu-border)] px-4 py-3"
              >
                <div>
                  <p className="font-mono text-xs text-brand">{item.label}</p>
                  <p className="mt-1 text-xs text-[var(--kikoyu-text-muted)]">{item.note}</p>
                </div>
                {'external' in item && item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-xs text-[var(--kikoyu-text-muted)] no-underline hover:text-brand"
                  >
                    Package →
                  </a>
                ) : (
                  <Link href={item.href} className="shrink-0 text-xs text-[var(--kikoyu-text-muted)] no-underline hover:text-brand">
                    Docs →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-[var(--kikoyu-text-muted)]">
          Provider classes ship in-core. Memory backends include in-memory, file, Redis, and Mem0
          adapters — see{' '}
          <Link href="/concepts/model-providers" className="text-brand no-underline">
            model providers
          </Link>{' '}
          and API reference.
        </p>
      </div>
    </Section>
  );
}
