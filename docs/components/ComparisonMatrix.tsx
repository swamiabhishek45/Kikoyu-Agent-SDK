import React from 'react';

export function ComparisonMatrix() {
  return (
    <div className="relative my-24 overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d14]/90 p-8 backdrop-blur-xl shadow-2xl">
      {/* Top ambient orange radial glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-36 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 85, 0, 0.2), transparent 80%)'
        }}
      />

      <div className="relative z-10 text-center space-y-2 mb-10">
        <h3 className="text-3xl font-extrabold text-white tracking-tight">Why Kikoyu Agent SDK?</h3>
        <p className="text-sm text-zinc-400">Designed to eliminate complex framework boilerplate without sacrificing flexibility.</p>
      </div>

      <div className="relative z-10 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-800 text-zinc-400 font-semibold text-xs uppercase tracking-wider">
              <th className="pb-4">Feature</th>
              <th className="pb-4 font-bold text-[#ff5500]">Kikoyu SDK</th>
              <th className="pb-4">Traditional Frameworks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/70 text-zinc-300">
            <tr className="hover:bg-white/[0.02] transition-colors">
              <td className="py-4 font-medium text-white">Type Safety</td>
              <td className="py-4 font-bold text-[#ff5500]">100% Strict Zod Inferenced</td>
              <td className="py-4 text-zinc-500">Partial / Manual Casting</td>
            </tr>
            <tr className="hover:bg-white/[0.02] transition-colors">
              <td className="py-4 font-medium text-white">Guardrails Overhead</td>
              <td className="py-4 font-bold text-[#ff5500]">0ms (Concurrent Parallel)</td>
              <td className="py-4 text-zinc-500">Sequential (+500ms Latency)</td>
            </tr>
            <tr className="hover:bg-white/[0.02] transition-colors">
              <td className="py-4 font-medium text-white">Agent Handoffs</td>
              <td className="py-4 font-bold text-[#ff5500]">Built-in First Class Tool Primitives</td>
              <td className="py-4 text-zinc-500">Custom Graph Routing Boilerplate</td>
            </tr>
            <tr className="hover:bg-white/[0.02] transition-colors">
              <td className="py-4 font-medium text-white">API & HTTP Streaming</td>
              <td className="py-4 font-bold text-[#ff5500]">Native Next.js App Router Package</td>
              <td className="py-4 text-zinc-500">Manual Adapter Wiring</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


