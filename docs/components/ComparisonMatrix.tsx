import React from 'react';

export function ComparisonMatrix() {
  return (
    <div className="vetra-card my-20 p-8">
      <div className="text-center space-y-2 mb-8">
        <h3 className="text-2xl font-bold text-white">Why Kikoyu Agent SDK?</h3>
        <p className="text-sm text-zinc-400">Designed to eliminate complex framework boilerplate without sacrificing flexibility.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-800 text-zinc-400 font-semibold">
              <th className="pb-4">Feature</th>
              <th className="pb-4 font-bold text-orange-500">Kikoyu SDK</th>
              <th className="pb-4">Traditional Frameworks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-800/60 text-zinc-300">
            <tr>
              <td className="py-4 font-medium text-white">Type Safety</td>
              <td className="py-4 font-bold text-orange-500">100% Strict Zod Inferenced</td>
              <td className="py-4 text-zinc-500">Partial / Manual Casting</td>
            </tr>
            <tr>
              <td className="py-4 font-medium text-white">Guardrails Overhead</td>
              <td className="py-4 font-bold text-orange-500">0ms (Concurrent Parallel)</td>
              <td className="py-4 text-zinc-500">Sequential (+500ms Latency)</td>
            </tr>
            <tr>
              <td className="py-4 font-medium text-white">Agent Handoffs</td>
              <td className="py-4 font-bold text-orange-500">Built-in First Class Tool Primitives</td>
              <td className="py-4 text-zinc-500">Custom Graph Routing Boilerplate</td>
            </tr>
            <tr>
              <td className="py-4 font-medium text-white">API & HTTP Streaming</td>
              <td className="py-4 font-bold text-orange-500">Native Next.js App Router Package</td>
              <td className="py-4 text-zinc-500">Manual Adapter Wiring</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

