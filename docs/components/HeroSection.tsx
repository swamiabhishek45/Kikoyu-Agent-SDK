import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm i @kikoyu/core');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 pt-16 pb-10 text-center md:pt-20">
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl md:text-6xl">
        Build type-safe AI agents in TypeScript
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
        Tool calling, guardrails, multi-agent handoffs, session memory, and streaming — without
        framework boilerplate.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href="/quickstart" className="no-underline">
          <Button variant="primary" size="lg" className="gap-2">
            Start building
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </Link>
        <Button variant="secondary" size="lg" className="gap-2 font-mono" onClick={handleCopy}>
          {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
          {copied ? 'Copied' : 'npm i @kikoyu/core'}
        </Button>
      </div>
    </section>
  );
}
