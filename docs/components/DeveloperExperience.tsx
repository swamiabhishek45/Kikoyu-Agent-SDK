import React from 'react';
import Link from 'next/link';
import { CodeBlock } from './ui/code-block';
import { Section, SectionHeader } from './ui/section';
import { Badge } from './ui/badge';

const STEPS = [
  {
    title: 'Install the SDK',
    why: 'Peer dependency on Zod keeps schemas in your codebase.',
    href: '/quickstart',
    code: `pnpm add @kikoyu/core zod`,
    language: 'bash',
    filename: 'terminal',
  },
  {
    title: 'Configure an agent',
    why: 'Tools, instructions, and model settings live on one builder.',
    href: '/concepts/agent',
    code: `const agent = Agent.builder()
  .setApiKey(process.env.OPENAI_API_KEY!)
  .setName('Assistant')
  .setInstructions('Respond in concise sentences.')
  .addTool(getWeatherTool)
  .build();`,
    language: 'tsx',
    filename: 'agent.ts',
  },
  {
    title: 'Execute a task',
    why: 'Runner.run() is the same entry point used in docs, examples, and Vitest.',
    href: '/concepts/tools',
    code: `const runner = new Runner();
const result = await runner.run(
  agent,
  'What is the weather in Tokyo?'
);

console.log(result.text);`,
    language: 'tsx',
    filename: 'run.ts',
  },
] as const;

export function DeveloperExperience() {
  return (
    <Section>
      <SectionHeader>
        <Badge variant="outline" className="mb-1">
          Developer experience
        </Badge>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-3xl">
          Three steps to a working agent
        </h2>
        <p className="text-sm text-[var(--kikoyu-text-muted)]">
          No code generators or hidden config — install, define an agent, call{' '}
          <code className="font-mono text-xs">runner.run()</code>. If it appears in the quickstart, it
          is covered by tests in{' '}
          <code className="font-mono text-xs">packages/core/test</code>.
        </p>
      </SectionHeader>

      <ol className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
        {STEPS.map((step, index) => (
          <li key={step.title} className="flex flex-col">
            <span className="font-mono text-xs text-brand">Step {index + 1}</span>
            <Link
              href={step.href}
              className="mt-1 text-base font-semibold text-[var(--kikoyu-text)] no-underline hover:text-brand"
            >
              {step.title}
            </Link>
            <p className="mt-2 text-xs leading-relaxed text-[var(--kikoyu-text-muted)]">{step.why}</p>
            <CodeBlock
              code={step.code}
              language={step.language}
              accent="#f97316"
              filename={step.filename}
              className="mt-4 flex-1"
              showLineNumbers={false}
            />
          </li>
        ))}
      </ol>
    </Section>
  );
}
