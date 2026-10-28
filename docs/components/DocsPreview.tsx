import React from 'react';
import Link from 'next/link';
import { Section, SectionHeader } from './ui/section';
import { Badge } from './ui/badge';

const DOC_GROUPS = [
  {
    title: 'Getting started',
    links: [
      { label: 'Quickstart', href: '/quickstart' },
      { label: 'Agent', href: '/concepts/agent' },
      { label: 'Tools', href: '/concepts/tools' },
    ],
  },
  {
    title: 'Core concepts',
    links: [
      { label: 'Handoffs', href: '/concepts/handoffs' },
      { label: 'Sessions & memory', href: '/concepts/sessions' },
      { label: 'Streaming', href: '/concepts/streaming' },
      { label: 'Model providers', href: '/concepts/model-providers' },
    ],
  },
  {
    title: 'Advanced',
    links: [
      { label: 'Guardrails', href: '/concepts/guardrails' },
      { label: 'Tracing', href: '/concepts/tracing' },
      { label: 'Structured output', href: '/concepts/structured-output' },
      { label: 'RunContext', href: '/concepts/context' },
    ],
  },
  {
    title: 'Reference & examples',
    links: [
      { label: 'API reference', href: '/api-reference/README' },
      { label: 'Single agent + tools', href: '/examples/single-agent-tools' },
      { label: 'Multi-agent handoff', href: '/examples/multi-agent-handoff' },
    ],
  },
] as const;

export function DocsPreview() {
  return (
    <Section>
      <SectionHeader>
        <Badge variant="outline" className="mb-1">
          Documentation
        </Badge>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-3xl">
          Guides, concepts, and generated API docs
        </h2>
        <p className="text-sm text-[var(--kikoyu-text-muted)]">
          Every link below is a live page in this site — TypeDoc output included.
        </p>
      </SectionHeader>

      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {DOC_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--kikoyu-text-muted)]">
              {group.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--kikoyu-text)] no-underline hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
