import React from 'react';
import { ComparisonTable } from './ui/comparison-table';
import { Section } from './ui/section';

const ROWS = [
  {
    feature: 'Type safety',
    kikoyu: 'Strict Zod-inferred tools and outputs',
    traditional: 'Partial typing with manual casting',
  },
  {
    feature: 'Guardrails overhead',
    kikoyu: 'Concurrent parallel checks',
    traditional: 'Often sequential (+latency)',
  },
  {
    feature: 'Agent handoffs',
    kikoyu: 'First-class handoff primitives',
    traditional: 'Custom graph routing boilerplate',
  },
  {
    feature: 'HTTP streaming',
    kikoyu: 'Native Next.js App Router package',
    traditional: 'Manual adapter wiring',
  },
];

export function ComparisonMatrix() {
  return (
    <Section className="pb-24">
      <ComparisonTable
        title="Why Kikoyu Agent SDK?"
        description="Less boilerplate, more control over agent behavior."
        rows={ROWS}
      />
    </Section>
  );
}
