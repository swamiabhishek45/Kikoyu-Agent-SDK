import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUpRight, Copy, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('pnpm add @kikoyu/core zod');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center text-center gap-6 py-12 md:py-16">
      <Badge variant="default" className="gap-2 px-4 py-1.5 text-xs">
        <Sparkles className="h-3.5 w-3.5 text-orange-500 animate-pulse" />
        <span>Trusted by Developers Worldwide • Kikoyu v0.1.0</span>
      </Badge>

      <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl leading-tight">
        Develop AI Agents with <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">Type-Safe Precision</span>.
      </h1>

      <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Content & code in perfect harmony. Build tool-calling loops, zero-latency guardrails, multi-agent handoffs, session memory, and streaming in seconds.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link href="/concepts/agent" className="no-underline">
          <Button size="lg" className="gap-2 font-semibold">
            Start Building Now <ArrowUpRight className="h-5 w-5" />
          </Button>
        </Link>

        <Button
          variant="secondary"
          size="lg"
          onClick={handleCopy}
          className="font-mono text-sm gap-2"
        >
          {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-orange-500" />}
          <span>{copied ? 'Copied to clipboard!' : 'pnpm add @kikoyu/core zod'}</span>
        </Button>
      </div>
    </section>
  );
}
