'use client';

import { AgentBentoGrid } from './ui/agent-bento-grid';
import { Section, SectionHeader } from './ui/section';
import { Badge } from './ui/badge';

export function AgentWorkspaceSection() {
  return (
    <Section className="py-14 md:py-16">
      <SectionHeader className="mb-8 text-left md:mx-0 md:max-w-3xl md:text-left">
        <Badge variant="outline" className="mb-1">
          Agent workspace
        </Badge>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-3xl">
          See how runs flow through your stack
        </h2>
        <p className="text-sm text-[var(--kikoyu-text-muted)] sm:text-base">
          Interactive panels from{' '}
          <a
            href="https://www.vengenceui.com/components/agent-bento-grid"
            target="_blank"
            rel="noreferrer"
            className="text-brand no-underline hover:text-brand-hover"
          >
            Vengeance UI
          </a>{' '}
          — pipeline routing, token usage, activity feeds, retrieval, and tool latency in one bento
          grid tuned for agent products.
        </p>
      </SectionHeader>
      <div className="overflow-hidden rounded-2xl border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)]/80 p-3 md:p-4">
        <AgentBentoGrid />
      </div>
    </Section>
  );
}
