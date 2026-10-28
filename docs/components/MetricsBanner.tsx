import React from 'react';
import { VERIFIED_TEST_COUNT } from '../lib/site-metrics';
import { SITE } from '../lib/site-config';

const METRICS = [
  { value: SITE.packageName, label: 'npm package', mono: true },
  { value: `v${SITE.version}`, label: 'Published version', mono: true },
  { value: String(VERIFIED_TEST_COUNT), label: 'Vitest cases in monorepo', mono: false },
  { value: 'ESM + CJS', label: 'Module formats', mono: true },
] as const;

export function MetricsBanner() {
  return (
    <div className="grid grid-cols-2 divide-y divide-[var(--kikoyu-border)] rounded-xl border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)] md:grid-cols-4 md:divide-x md:divide-y-0">
      {METRICS.map((metric) => (
        <div key={metric.label} className="px-5 py-6 text-center md:px-6">
          <div
            className={
              metric.mono
                ? 'text-lg font-semibold text-brand md:text-xl font-mono'
                : 'text-2xl font-semibold text-[var(--kikoyu-text)] md:text-3xl'
            }
          >
            {metric.value}
          </div>
          <div className="mt-2 text-xs font-medium uppercase tracking-wide text-[var(--kikoyu-text-muted)]">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}
