import React from 'react';

export function MetricsBanner() {
  return (
    <section className="relative my-16 overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d14]/90 p-8 backdrop-blur-xl shadow-2xl">
      {/* Top ambient orange radial glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 85, 0, 0.22), transparent 80%)'
        }}
      />

      <div className="relative z-10 grid grid-cols-2 gap-8 text-center md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800/80">
        <div className="pt-4 md:pt-0">
          <div className="text-3xl font-extrabold text-[#ff5500] md:text-4xl drop-shadow-[0_0_15px_rgba(255,85,0,0.4)]">0ms</div>
          <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">Cold-Start Overhead</div>
        </div>

        <div className="pt-4 md:pt-0">
          <div className="text-3xl font-extrabold text-teal-400 md:text-4xl drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]">100%</div>
          <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">Type-Safe Zod Schemas</div>
        </div>

        <div className="pt-4 md:pt-0">
          <div className="text-3xl font-extrabold text-white md:text-4xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">22 / 22</div>
          <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">Verified Test Suite</div>
        </div>

        <div className="pt-4 md:pt-0">
          <div className="text-3xl font-extrabold text-amber-400 md:text-4xl drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">ESM + CJS</div>
          <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">Dual Target Output</div>
        </div>
      </div>
    </section>
  );
}


