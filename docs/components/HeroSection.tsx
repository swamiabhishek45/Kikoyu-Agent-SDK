import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { AgentExecutionViz } from './AgentExecutionViz';
import { Button } from './ui/button';
import { InstallCommand } from './ui/install-command';
import { SITE } from '../lib/site-config';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--kikoyu-border)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.12),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-24">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--kikoyu-text-muted)]">
            Open source · TypeScript · npm {SITE.version}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Build AI agents.
            <span className="block text-[var(--kikoyu-text-muted)]">Ship with type-safe tools.</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--kikoyu-text-muted)] sm:text-lg">
            A TypeScript-first SDK for agent loops, Zod-validated tools, multi-agent handoffs, session
            memory, guardrails, and streaming events — with a fluent{' '}
            <code className="rounded border border-[var(--kikoyu-border)] bg-black/30 px-1 py-0.5 font-mono text-sm text-[var(--kikoyu-text)]">
              Agent.builder()
            </code>{' '}
            API.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/quickstart" className="no-underline">
              <Button variant="primary" size="lg" className="gap-2">
                Get started
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href={SITE.github} target="_blank" rel="noreferrer" className="no-underline">
              <Button variant="outline" size="lg" className="gap-2 border-[var(--kikoyu-border)] bg-transparent">
                <Github className="h-4 w-4" />
                Explore GitHub
              </Button>
            </a>
          </div>

          <div className="mt-6 max-w-md">
            <InstallCommand command={SITE.installNpm} />
          </div>
        </div>

        <div className="lg:justify-self-end lg:w-full lg:max-w-lg xl:max-w-xl">
          <AgentExecutionViz />
        </div>
      </div>
    </section>
  );
}
