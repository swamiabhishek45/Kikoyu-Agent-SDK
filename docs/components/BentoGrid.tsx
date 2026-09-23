import React from 'react';
import {
  Wrench,
  ShieldCheck,
  GitPullRequest,
  Brain,
  Zap,
  Sparkles,
} from 'lucide-react';
import { Badge } from './ui/badge';
import { FeatureGrid, type FeatureItem } from './ui/feature-grid';
import { Section, SectionHeader } from './ui/section';

const FEATURES: FeatureItem[] = [
  {
    icon: Wrench,
    title: 'Zod tool registry',
    description:
      'Define tools with Zod schemas. Arguments are validated before execution with auto-generated JSON schema.',
  },
  {
    icon: ShieldCheck,
    title: 'Concurrent guardrails',
    description:
      'Run input safety checks in parallel with model requests to avoid adding sequential latency.',
  },
  {
    icon: GitPullRequest,
    title: 'Multi-agent handoffs',
    description:
      'Split workflows into specialist agents and transfer control from triage routers automatically.',
  },
  {
    icon: Brain,
    title: 'Session memory',
    description:
      'Storage-agnostic sessions retain turn history across multiple Runner.run() calls.',
  },
  {
    icon: Zap,
    title: 'Async streaming',
    description:
      'Stream text deltas, tool lifecycle events, and handoff transitions to your UI in real time.',
  },
  {
    icon: Sparkles,
    title: 'Fluent AgentBuilder',
    description:
      'Build immutable agent configs with chainable methods and strict validation at .build() time.',
  },
];

export function BentoGrid() {
  return (
    <Section>
      <SectionHeader>
        <Badge variant="outline" className="mb-1">
          Core SDK
        </Badge>
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Everything you need for{' '}
          <span className="text-brand">autonomous systems</span>
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          Reliability, safety, and modern TypeScript workflows in one package.
        </p>
      </SectionHeader>
      <FeatureGrid features={FEATURES} />
    </Section>
  );
}
