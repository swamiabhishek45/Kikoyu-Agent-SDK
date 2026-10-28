'use client';

import { FlipFadeText } from './ui/flip-fade-text';

const HERO_WORDS = ['TOOLS', 'HANDOFFS', 'STREAMING', 'GUARDRAILS', 'MEMORY'] as const;

export function HeroAccentWords() {
  return (
    <FlipFadeText
      words={[...HERO_WORDS]}
      interval={2800}
      className="inline-flex min-h-0 items-baseline justify-start"
      textClassName="font-mono text-[0.92em] font-semibold uppercase tracking-wide text-brand"
      letterDuration={0.45}
      staggerDelay={0.06}
      exitStaggerDelay={0.03}
    />
  );
}
