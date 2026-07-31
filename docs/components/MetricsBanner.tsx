import React from 'react';

export function MetricsBanner() {
  return (
    <section className="my-16 grid grid-cols-2 gap-6 border-y border-orange-500/20 py-10 text-center md:grid-cols-4">
      <div>
        <div className="text-3xl font-extrabold text-orange-500 md:text-4xl">0ms</div>
        <div className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">Cold-Start Overhead</div>
      </div>
      <div>
        <div className="text-3xl font-extrabold text-teal-500 md:text-4xl">100%</div>
        <div className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">Type-Safe Zod Schemas</div>
      </div>
      <div>
        <div className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 md:text-4xl">22 / 22</div>
        <div className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">Verified Test Suite</div>
      </div>
      <div>
        <div className="text-3xl font-extrabold text-purple-500 md:text-4xl">ESM + CJS</div>
        <div className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">Dual Target Output</div>
      </div>
    </section>
  );
}
