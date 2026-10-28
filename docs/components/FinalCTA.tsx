import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import { Button } from './ui/button';
import { InstallCommand } from './ui/install-command';
import { SITE } from '../lib/site-config';

export function FinalCTA() {
  return (
    <section className="border-t border-[var(--kikoyu-border)] py-20 md:py-24">
      <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-3xl">
          Build your next agent with TypeScript
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--kikoyu-text-muted)] sm:text-base">
          Start from the quickstart, explore worked examples, and wire tools with Zod — the same APIs
          used in the core test suite.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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
        <div className="mx-auto mt-8 max-w-md">
          <InstallCommand command={SITE.installNpm} />
        </div>
      </div>
    </section>
  );
}
