import React from 'react';
import Link from 'next/link';
import { KikoyuLogo } from './KikoyuLogo';

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/80 bg-[#060608] py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-400">
        <div className="flex items-center gap-3">
          <KikoyuLogo className="h-6 w-auto" />
          <span className="font-semibold text-white">Kikoyu Agent SDK © 2026</span>
        </div>

        <div className="flex items-center gap-6 font-medium">
          <Link href="/concepts/agent" className="hover:text-white transition-colors">Docs</Link>
          <Link href="/api-reference/README" className="hover:text-white transition-colors">API Reference</Link>
          <a
            href="https://github.com/swamiabhishek45/Kikoyu-Agent-SDK"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/@kikoyu/core"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            npm
          </a>
        </div>
      </div>
    </footer>
  );
}

