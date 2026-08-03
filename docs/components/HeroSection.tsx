import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npm i @kikoyu/core');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center pt-8 pb-12 px-4">
      {/* Main Hero Headline */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl mb-6">
        Develop AI Agents With <br className="hidden sm:inline" />
        <span className="text-white">Type-Safe Precision</span>
      </h1>

      {/* Subheading */}
      <p className="max-w-2xl text-base sm:text-lg text-zinc-400 font-normal leading-relaxed mb-10">
        Content & code in perfect harmony. Build tool-calling loops, zero-latency guardrails, multi-agent handoffs, session memory, and streaming in seconds.
      </p>

      {/* Hero Buttons matching User Image 2 */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
        {/* Primary Orange Button */}
        <Link href="/quickstart" className="no-underline">
          <button className="bg-[#ff5500] hover:bg-[#e04b00] text-white font-medium text-base px-7 py-3 rounded-xl shadow-xl shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer">
            <span>Start Building Now</span>
            <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
          </button>
        </Link>

        {/* Secondary Dark Copy Command Button */}
        <button
          onClick={handleCopy}
          className="bg-[#1c1d24] hover:bg-[#252630] border border-zinc-700/60 hover:border-zinc-500 text-zinc-100 font-mono text-sm px-5 py-3 rounded-xl flex items-center gap-3 shadow-lg transition-all cursor-pointer"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-400" />
          ) : (
            <Copy className="h-4 w-4 text-[#ff5500]" />
          )}
          <span>{copied ? 'Copied to clipboard!' : 'npm i @kikoyu/core'}</span>
        </button>
      </div>
    </section>
  );
}



