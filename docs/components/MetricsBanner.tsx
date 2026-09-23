import React from 'react';
import { VERIFIED_TEST_COUNT } from '../lib/site-metrics';
import { Card } from './ui/card';

const METRICS = [
  { value: '0ms', label: 'Cold-start overhead', highlight: true },
  { value: '100%', label: 'Zod-inferred tool schemas', highlight: false },
  {
    value: `${VERIFIED_TEST_COUNT}/${VERIFIED_TEST_COUNT}`,
    label: 'Verified test suite',
    highlight: false,
  },
  { value: 'ESM + CJS', label: 'Dual module output', highlight: false },
];

export function MetricsBanner() {
  return (
    <Card className="grid grid-cols-2 divide-y divide-zinc-200 md:grid-cols-4 md:divide-x md:divide-y-0 dark:divide-zinc-800">
      {METRICS.map((metric) => (
        <div key={metric.label} className="px-6 py-6 text-center">
          <div
            className={
              metric.highlight
                ? 'text-2xl font-semibold text-brand md:text-3xl'
                : 'text-2xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl'
            }
          >
            {metric.value}
          </div>
          <div className="mt-2 text-xs font-medium uppercase tracking-wide text-zinc-500">
            {metric.label}
          </div>
        </div>
      ))}
    </Card>
  );
}
