'use client';

import React from 'react';
import { VERIFIED_TEST_COUNT } from '../lib/site-metrics';
import { SITE } from '../lib/site-config';
import StatsCounter from './ui/stats-counter';
import { GlowBorderCard } from './ui/glow-border-card';
import { SectionHeader } from './ui/section';
import { Badge } from './ui/badge';

const METRICS = [
  {
    value: SITE.packageName,
    label: 'Published on npm',
    hint: 'Add one dependency — use it in your app without cloning the monorepo.',
    mono: true,
    animate: false as const,
  },
  {
    value: `v${SITE.version}`,
    label: 'Semver releases',
    hint: 'Typed APIs and changelog-friendly version bumps for production upgrades.',
    mono: true,
    animate: false as const,
  },
  {
    value: VERIFIED_TEST_COUNT,
    label: 'Vitest tests in core',
    hint: 'Runner, tools, handoffs, sessions, guardrails, and streaming paths are covered in CI — so docs and examples match behavior you can rely on.',
    mono: false,
    animate: true as const,
  },
  {
    value: 'ESM + CJS',
    label: 'Dual module format',
    hint: 'Import from Node services, serverless handlers, or bundlers without extra build hacks.',
    mono: true,
    animate: false as const,
  },
] as const;

export function MetricsBanner() {
  return (
    <div>
      <SectionHeader className="mb-8 text-left md:mx-0 md:max-w-3xl md:text-left">
        <Badge variant="outline" className="mb-1">
          Evaluate before you adopt
        </Badge>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-3xl">
          Signals developers actually look for
        </h2>
        <p className="text-sm text-[var(--kikoyu-text-muted)] sm:text-base">
          We show package, test, and distribution facts up front — not vanity metrics — so you can
          judge fit in minutes and dive into the{' '}
          <a href={SITE.github} className="text-brand no-underline hover:text-brand-hover" target="_blank" rel="noreferrer">
            source
          </a>{' '}
          when you need proof.
        </p>
      </SectionHeader>

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
        <div className="grid w-full grid-cols-1 divide-y divide-[var(--kikoyu-border)] sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-y-0">
          {METRICS.map((metric) => (
            <div key={metric.label} className="px-5 py-6 text-left md:px-6">
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
              <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-[var(--kikoyu-text)]">
                {metric.label}
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[var(--kikoyu-text-muted)]">{metric.hint}</p>
            </div>
          ))}
        </div>
      </GlowBorderCard>
    </div>
  );
}
