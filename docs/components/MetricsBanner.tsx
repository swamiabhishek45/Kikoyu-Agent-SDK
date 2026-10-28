'use client';

import React from 'react';
import { VERIFIED_TEST_COUNT } from '../lib/site-metrics';
import { SITE } from '../lib/site-config';
import StatsCounter from './ui/stats-counter';
import { GlowBorderCard } from './ui/glow-border-card';

const METRICS = [
  { value: SITE.packageName, label: 'npm package', mono: true, animate: false as const },
  { value: `v${SITE.version}`, label: 'Published version', mono: true, animate: false as const },
  {
    value: VERIFIED_TEST_COUNT,
    label: 'Vitest cases in monorepo',
    mono: false,
    animate: true as const,
  },
  { value: 'ESM + CJS', label: 'Module formats', mono: true, animate: false as const },
] as const;

export function MetricsBanner() {
  return (
    <GlowBorderCard
      width="100%"
      aspectRatio="unset"
      colorPreset="sunset"
      borderRadius="0.75rem"
      className="w-full bg-[var(--kikoyu-bg-elevated)]/90"
      inset="-0.65em"
      borderWidth="0.85em"
      blurAmount="0.55em"
    >
      <div className="grid w-full grid-cols-2 divide-y divide-[var(--kikoyu-border)] md:grid-cols-4 md:divide-x md:divide-y-0">
        {METRICS.map((metric) => (
          <div key={metric.label} className="px-5 py-6 text-center md:px-6">
            <div
              className={
                metric.mono
                  ? 'text-lg font-semibold text-brand md:text-xl font-mono'
                  : 'text-2xl font-semibold text-[var(--kikoyu-text)] md:text-3xl'
              }
            >
              {metric.animate ? (
                <StatsCounter value={metric.value as number} duration={1.8} />
              ) : (
                metric.value
              )}
            </div>
            <div className="mt-2 text-xs font-medium uppercase tracking-wide text-[var(--kikoyu-text-muted)]">
              {metric.label}
            </div>
          </div>
        ))}
      </div>
    </GlowBorderCard>
  );
}
