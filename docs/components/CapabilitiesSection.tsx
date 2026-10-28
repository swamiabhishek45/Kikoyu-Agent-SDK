import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CodeBlock } from './ui/code-block';
import { Section, SectionHeader } from './ui/section';
import { Badge } from './ui/badge';

const TOOL_SNIPPET = `import { createTool, z } from '@kikoyu/core';

export const getWeatherTool = createTool({
  name: 'get_weather',
  parameters: z.object({
    location: z.string(),
  }),
  execute: async ({ location }) => ({
    location,
    temp: '22°C',
    condition: 'Sunny',
  }),
});`;

const STREAM_SNIPPET = `for await (const event of runner.stream(agent, input)) {
  switch (event.type) {
    case 'text_delta':
      process.stdout.write(event.delta);
      break;
    case 'tool_call_started':
      log(event.toolCall.name);
      break;
    case 'handoff_occurred':
      log(event.toAgent);
      break;
  }
}`;

export function CapabilitiesSection() {
  return (
    <Section>
      <SectionHeader className="text-left md:mx-0 md:max-w-3xl md:text-left">
        <Badge variant="outline" className="mb-1">
          Core capabilities
        </Badge>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-3xl">
          Composable primitives for real agent workflows
        </h2>
        <p className="text-sm text-[var(--kikoyu-text-muted)] sm:text-base">
          Each feature maps to documented APIs in{' '}
          <code className="font-mono text-xs">@kikoyu/core</code> — no hidden runtime magic.
        </p>
      </SectionHeader>

      <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
        <article className="lg:col-span-7 flex flex-col overflow-hidden rounded-xl border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)]">
          <div className="border-b border-[var(--kikoyu-border)] p-6 pb-4">
            <h3 className="text-lg font-semibold text-[var(--kikoyu-text)]">Type-safe tool calling</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--kikoyu-text-muted)]">
              Define tools with Zod schemas. Arguments are validated before{' '}
              <code className="font-mono text-xs">execute</code> runs, and JSON Schema is generated for
              the model automatically.
            </p>
            <Link
              href="/concepts/tools"
              className="mt-3 inline-flex items-center gap-1 text-sm text-brand no-underline hover:text-brand-hover"
            >
              Tools guide
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <CodeBlock
            code={TOOL_SNIPPET}
            language="tsx"
            accent="#f97316"
            filename="tools.ts"
            className="rounded-none border-0"
            showFrame={false}
          />
        </article>

        <div className="flex flex-col gap-4 lg:col-span-5">
          <article className="flex-1 rounded-xl border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)] p-6">
            <h3 className="text-base font-semibold text-[var(--kikoyu-text)]">Multi-agent handoffs</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--kikoyu-text-muted)]">
              Route work to specialist agents with{' '}
              <code className="font-mono text-xs">createHandoff()</code>. The runner tracks which agent
              is active when the run completes.
            </p>
            <Link href="/concepts/handoffs" className="mt-3 inline-flex items-center gap-1 text-sm text-brand no-underline">
              Handoffs
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>

          <article className="flex-1 rounded-xl border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)] p-6">
            <h3 className="text-base font-semibold text-[var(--kikoyu-text)]">Session memory</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--kikoyu-text-muted)]">
              Persist turn history across multiple{' '}
              <code className="font-mono text-xs">runner.run()</code> calls using{' '}
              <code className="font-mono text-xs">Session</code> and pluggable{' '}
              <code className="font-mono text-xs">MemoryStore</code> implementations.
            </p>
            <Link href="/concepts/sessions" className="mt-3 inline-flex items-center gap-1 text-sm text-brand no-underline">
              Sessions
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </article>
        </div>

        <article className="lg:col-span-5 flex flex-col overflow-hidden rounded-xl border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)]">
          <div className="border-b border-[var(--kikoyu-border)] p-6 pb-4">
            <h3 className="text-base font-semibold text-[var(--kikoyu-text)]">Streaming events</h3>
            <p className="mt-2 text-sm text-[var(--kikoyu-text-muted)]">
              Stream text deltas, tool lifecycle, handoffs, guardrails, and retries with{' '}
              <code className="font-mono text-xs">runner.stream()</code>.
            </p>
          </div>
          <CodeBlock
            code={STREAM_SNIPPET}
            language="tsx"
            accent="#f97316"
            filename="stream.ts"
            className="rounded-none border-0"
            showFrame={false}
          />
        </article>

        <article className="lg:col-span-7 rounded-xl border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)] p-6">
          <h3 className="text-base font-semibold text-[var(--kikoyu-text)]">Parallel guardrails</h3>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--kikoyu-text-muted)]">
            Attach input guardrails on the agent. Checks run concurrently with the model request so
            safety validation does not add a sequential round-trip before completion starts.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-dashed border-[var(--kikoyu-border)] p-4 font-mono text-xs">
              <p className="text-[var(--kikoyu-text-muted)]">Concurrent</p>
              <ul className="mt-2 space-y-1.5 text-[var(--kikoyu-text)]">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden />
                  guardrail.check(input)
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                  model.complete(messages)
                </li>
              </ul>
            </div>
            <div className="rounded-lg border border-[var(--kikoyu-border)] bg-black/25 p-4 font-mono text-xs text-[var(--kikoyu-text-muted)]">
              <p className="text-brand">guardrail_triggered</p>
              <p className="mt-2">Run stops before tool loop when a guardrail fails.</p>
              <Link href="/concepts/guardrails" className="mt-3 inline-block text-brand no-underline">
                Guardrails docs →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </Section>
  );
}
