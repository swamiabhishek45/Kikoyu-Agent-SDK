import React from 'react';

export function MetricsBanner() {
  return (
    <section className="my-16 grid grid-cols-2 gap-6 border-y border-zinc-800/80 py-10 text-center md:grid-cols-4 bg-zinc-950/40 rounded-2xl border px-6 backdrop-blur-md">
      <div>
        <div className="text-3xl font-extrabold text-orange-500 md:text-4xl">0ms</div>
        <div className="mt-1 text-xs font-medium text-zinc-400">Cold-Start Overhead</div>
      </div>
      <div>
        <div className="text-3xl font-extrabold text-teal-400 md:text-4xl">100%</div>
        <div className="mt-1 text-xs font-medium text-zinc-400">Type-Safe Zod Schemas</div>
      </div>
      <div>
        <div className="text-3xl font-extrabold text-zinc-100 md:text-4xl">22 / 22</div>
        <div className="mt-1 text-xs font-medium text-zinc-400">Verified Test Suite</div>
      </div>
      <div>
        <div className="text-3xl font-extrabold text-amber-500 md:text-4xl">ESM + CJS</div>
        <div className="mt-1 text-xs font-medium text-zinc-400">Dual Target Output</div>
      </div>
    </section>
  );
}

