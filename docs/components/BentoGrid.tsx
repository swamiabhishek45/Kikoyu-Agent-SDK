import React from 'react';
import { Wrench, ShieldCheck, GitPullRequest, Brain, Zap, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

const FEATURES = [
  {
    icon: Wrench,
    title: 'Zod Tool Registry',
    description: 'Define tools with Zod schemas. Function arguments are strictly validated before execution with auto-generated JSON schema definitions.',
  },
  {
    icon: ShieldCheck,
    title: 'Concurrent Guardrails',
    description: 'Execute input safety filters in parallel with model requests for zero added latency. Abort malicious prompt injections cleanly.',
  },
  {
    icon: GitPullRequest,
    title: 'Multi-Agent Handoffs',
    description: 'Decompose complex agent logic into specialized agents. Control transfers dynamically between triage routers and specialist agents.',
  },
  {
    icon: Brain,
    title: 'Session Memory',
    description: 'Storage-agnostic session managers (MemoryStore) retain conversation turn history across multiple separate Runner.run() calls.',
  },
  {
    icon: Zap,
    title: 'Async Generator Streaming',
    description: 'Stream token text deltas, tool call lifecycle events, and handoff transitions in real time directly to your user interface.',
  },
  {
    icon: Sparkles,
    title: 'Fluent AgentBuilder',
    description: 'Construct immutable agent configurations using chainable builder methods with strict .build() validation.',
  },
];

export function BentoGrid() {
  return (
    <section className="my-20">
      <div className="mx-auto max-w-2xl text-center space-y-3 mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Everything You Need to Build Autonomous Systems.
        </h2>
        <p className="text-base text-zinc-600 dark:text-zinc-400">
          A comprehensive toolkit engineered for reliability, safety, and modern TypeScript workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURES.map((feat, i) => {
          const Icon = feat.icon;
          return (
            <Card key={i} className="group relative overflow-hidden transition-all duration-300">
              <CardHeader className="space-y-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-600 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle>{feat.title}</CardTitle>
                <CardDescription>{feat.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
