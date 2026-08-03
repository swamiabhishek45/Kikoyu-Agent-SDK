import React from 'react';
import { Wrench, ShieldCheck, GitPullRequest, Brain, Zap, Sparkles, CheckCircle2, User, Activity } from 'lucide-react';

const FEATURES = [
  {
    icon: Wrench,
    title: 'Zod Tool Registry',
    description: 'Define tools with Zod schemas. Function arguments are strictly validated before execution with auto-generated JSON schema definitions.',
    renderMockup: () => (
      <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#090a0f] p-4 overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 30%, rgba(255, 85, 0, 0.18), transparent 75%)' }}
        />
        {/* Card Mockup 1: User / Code Insights with avatar badge */}
        <div className="relative z-10 w-full max-w-[200px] rounded-xl border border-zinc-800 bg-[#0d0e14]/90 p-3 shadow-xl backdrop-blur-md space-y-2">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-300">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#ff5500]" />
              <span>schema_v1.zod</span>
            </div>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="font-mono text-[10px] text-zinc-400 space-y-1">
            <div><span className="text-[#ff5500]">location:</span> z.string()</div>
            <div><span className="text-[#ff5500]">unit:</span> z.enum([...])</div>
          </div>
          {/* User Icon Badge at bottom matching Image 2 */}
          <div className="pt-1 flex justify-center">
            <div className="h-6 w-6 rounded-full bg-[#ff5500] text-white flex items-center justify-center shadow-lg shadow-orange-500/40">
              <User className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: 'Concurrent Guardrails',
    description: 'Execute input safety filters in parallel with model requests for zero added latency. Abort malicious prompt injections cleanly.',
    renderMockup: () => (
      <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#090a0f] p-4 overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 30%, rgba(255, 85, 0, 0.18), transparent 75%)' }}
        />
        {/* Card Mockup 2: Performance Metrics with vertical dashed line & glowing node dot (matching Card 2 in Image 2!) */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-1">
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
            <span>Latency</span>
            <span className="text-[#ff5500] font-bold">0.4ms</span>
          </div>

          <div className="relative w-full h-24 flex items-center">
            {/* Dashed Vertical Guide Line */}
            <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-[#ff5500]/70" />
            
            {/* Glowing Orange Trajectory Line */}
            <svg className="w-full h-full overflow-visible" viewBox="0 0 200 60">
              <path
                d="M 10 30 L 70 30 L 100 15 L 130 45 L 190 45"
                fill="none"
                stroke="#ff5500"
                strokeWidth="2.5"
              />
            </svg>

            {/* Glowing Node Dot and Tooltip Badge (matching Image 2!) */}
            <div className="absolute left-1/2 top-3 -translate-x-1/2 flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5500] border-2 border-white shadow-[0_0_12px_#ff5500] animate-ping" />
              <div className="rounded-md border border-zinc-800 bg-[#0e0f16]/95 px-2 py-1 text-[9px] font-mono text-zinc-200 shadow-xl backdrop-blur-md">
                <span className="text-zinc-400">Filter</span> <span className="text-emerald-400 font-bold">0ms (0%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: GitPullRequest,
    title: 'Multi-Agent Handoffs',
    description: 'Decompose complex agent logic into specialized agents. Control transfers dynamically between triage routers and specialist agents.',
    renderMockup: () => (
      <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#090a0f] p-4 overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 30%, rgba(255, 85, 0, 0.18), transparent 75%)' }}
        />
        {/* Card Mockup 3: Split Card with Glowing Orange Circular Badges A & B (matching Card 3 in Image 2!) */}
        <div className="relative z-10 w-full h-full grid grid-cols-2 gap-3 p-1">
          <div className="rounded-lg border border-zinc-800 bg-[#0d0e15]/80 p-2.5 flex flex-col items-center justify-between shadow-lg">
            <div className="h-6 w-6 rounded-full bg-[#ff5500] text-white text-[11px] font-bold flex items-center justify-center shadow-md shadow-orange-500/40">
              A
            </div>
            <div className="w-full space-y-1 pt-2">
              <div className="h-1.5 w-full bg-zinc-800 rounded-full" />
              <div className="h-1.5 w-3/4 bg-zinc-800/60 rounded-full" />
            </div>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-[#0d0e15]/80 p-2.5 flex flex-col items-center justify-between shadow-lg">
            <div className="h-6 w-6 rounded-full bg-[#ff5500] text-white text-[11px] font-bold flex items-center justify-center shadow-md shadow-orange-500/40">
              B
            </div>
            <div className="w-full space-y-1 pt-2">
              <div className="h-1.5 w-full bg-zinc-800 rounded-full" />
              <div className="h-1.5 w-3/4 bg-zinc-800/60 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Brain,
    title: 'Session Memory',
    description: 'Storage-agnostic session managers (MemoryStore) retain conversation turn history across multiple separate Runner.run() calls.',
    renderMockup: () => (
      <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#090a0f] p-4 overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 30%, rgba(255, 85, 0, 0.18), transparent 75%)' }}
        />
        {/* Stacked Memory Cards */}
        <div className="relative z-10 w-full max-w-[200px] h-28 flex items-center justify-center">
          <div className="absolute top-0 w-36 h-20 rounded-lg border border-zinc-800/60 bg-zinc-900/40 opacity-40 scale-90" />
          <div className="absolute top-2 w-40 h-22 rounded-lg border border-zinc-800/80 bg-zinc-900/60 opacity-70 scale-95" />
          <div className="relative z-20 w-44 h-24 rounded-xl border border-zinc-700 bg-[#0d0e15] p-3 shadow-xl flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span>MemoryStore</span>
              <span className="text-[#ff5500]">#1042</span>
            </div>
            <div className="text-[10px] font-mono text-zinc-300 truncate">
              turn_history: [5 turns]
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Zap,
    title: 'Async Generator Streaming',
    description: 'Stream token text deltas, tool call lifecycle events, and handoff transitions in real time directly to your user interface.',
    renderMockup: () => (
      <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#090a0f] p-4 overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 30%, rgba(255, 85, 0, 0.18), transparent 75%)' }}
        />
        <div className="relative z-10 w-full max-w-[210px] rounded-xl border border-zinc-800 bg-[#0d0e14]/90 p-3 shadow-xl backdrop-blur-md space-y-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
            <div className="flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-[#ff5500]" />
              <span>stream()</span>
            </div>
            <span className="text-emerald-400">Active</span>
          </div>
          <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-[#ff5500] animate-pulse rounded-full" />
          </div>
          <div className="text-[10px] font-mono text-zinc-300 italic">
            "text_delta": "space..."
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Sparkles,
    title: 'Fluent AgentBuilder',
    description: 'Construct immutable agent configurations using chainable builder methods with strict .build() validation.',
    renderMockup: () => (
      <div className="relative w-full h-44 rounded-xl border border-white/5 bg-[#090a0f] p-4 overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 30%, rgba(255, 85, 0, 0.18), transparent 75%)' }}
        />
        <div className="relative z-10 w-full max-w-[210px] space-y-1.5">
          <div className="rounded-lg border border-zinc-800 bg-[#0d0e15] px-2.5 py-1.5 text-[10px] font-mono text-zinc-400 flex items-center justify-between">
            <span>.setName('Assistant')</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5500]" />
          </div>
          <div className="rounded-lg border border-zinc-800 bg-[#0d0e15] px-2.5 py-1.5 text-[10px] font-mono text-zinc-400 flex items-center justify-between">
            <span>.setInstructions(...)</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5500]" />
          </div>
          <div className="rounded-lg border border-[#ff5500]/40 bg-[#ff5500]/10 px-2.5 py-1.5 text-[10px] font-mono text-white flex items-center justify-between">
            <span>.build()</span>
            <CheckCircle2 className="h-3 w-3 text-[#ff5500]" />
          </div>
        </div>
      </div>
    ),
  },
];

export function BentoGrid() {
  return (
    <section className="my-24">
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-300 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-[#ff5500]" />
          <span>Core SDK Architecture</span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Everything You Need to Build <br />
          <span className="text-[#ff5500]">Autonomous Systems</span>
        </h2>
        <p className="text-base text-zinc-400 max-w-xl mx-auto">
          A comprehensive toolkit engineered for reliability, safety, and modern TypeScript workflows.
        </p>
      </div>

      {/* Bento Grid Layout matching Image 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((feat, i) => {
          const Icon = feat.icon;
          const Mockup = feat.renderMockup;
          return (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c0d14]/90 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff5500]/50 hover:shadow-[0_0_35px_rgba(255,85,0,0.2)] group flex flex-col justify-between space-y-5"
            >
              {/* Card Visual Mockup Preview */}
              <Mockup />

              {/* Card Text Footer */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ff5500]/10 border border-[#ff5500]/25 text-[#ff5500] group-hover:bg-[#ff5500] group-hover:text-white transition-colors">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{feat.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pl-10">{feat.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


