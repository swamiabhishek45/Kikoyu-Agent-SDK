import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CodeBlock } from './ui/code-block';
import { Section, SectionHeader } from './ui/section';
import { Badge } from './ui/badge';

const EXAMPLES = [
  {
    name: 'Single agent with tools',
    description: 'Weather lookup with a Zod-validated get_weather tool and a concise agent loop.',
    href: '/examples/single-agent-tools',
    preview: `const result = await runner.run(
  weatherAgent,
  'What is the weather in Tokyo?'
);`,
  },
  {
    name: 'Multi-agent handoff',
    description: 'Triage router that delegates programming questions to a code specialist.',
    href: '/examples/multi-agent-handoff',
    preview: `const result = await runner.run(
  triageRouter,
  'Write binary search in TypeScript.'
);
// result.agent.name → Code Specialist`,
  },
  {
    name: 'Session memory',
    description: 'Multi-turn conversation persisted with Session and InMemoryStore.',
    href: '/concepts/sessions',
    preview: `await runner.run(agent, 'My color is cerulean.', { session });
const next = await runner.run(agent, 'What is my color?', { session });`,
  },
  {
    name: 'Streaming lifecycle',
    description: 'Consume text deltas and tool events from runner.stream().',
    href: '/concepts/streaming',
    preview: `for await (const event of runner.stream(agent, input)) {
  if (event.type === 'text_delta') write(event.delta);
}`,
  },
] as const;

export function ExamplesSection() {
  return (
    <Section className="border-t border-[var(--kikoyu-border)]">
      <SectionHeader>
        <Badge variant="outline" className="mb-1">
          Examples
        </Badge>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-3xl">
          Patterns you can run today
        </h2>
        <p className="text-sm text-[var(--kikoyu-text-muted)]">
          Worked examples in the docs mirror scripts in the monorepo{' '}
          <code className="font-mono text-xs">examples/</code> package.
        </p>
      </SectionHeader>

      <div className="grid gap-5 md:grid-cols-2">
        {EXAMPLES.map((example) => (
          <article
            key={example.name}
            className="flex flex-col overflow-hidden rounded-xl border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)]"
          >
            <div className="p-6 pb-3">
              <h3 className="text-base font-semibold text-[var(--kikoyu-text)]">{example.name}</h3>
              <p className="mt-2 text-sm text-[var(--kikoyu-text-muted)]">{example.description}</p>
              <Link
                href={example.href}
                className="mt-3 inline-flex items-center gap-1 text-sm text-brand no-underline hover:text-brand-hover"
              >
                View guide
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <CodeBlock
              code={example.preview}
              language="tsx"
              accent="#f97316"
              showFrame={false}
              showLineNumbers={false}
              className="mt-auto rounded-none border-0 border-t border-[var(--kikoyu-border)]"
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
