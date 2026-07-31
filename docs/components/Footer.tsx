import React from 'react';
import Link from 'next/link';
import { Coffee } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full border-t border-orange-500/20 bg-white/50 dark:bg-zinc-950/50 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-600 dark:text-zinc-400">
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-xs">
            <Coffee className="h-4 w-4" />
          </div>
          <span className="font-semibold text-zinc-900 dark:text-zinc-50">Kikoyu Agent SDK © 2026</span>
        </div>

        <div className="flex items-center gap-6 font-medium">
          <Link href="/concepts/agent" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Docs</Link>
          <Link href="/api-reference/README" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">API Reference</Link>
          <a
            href="https://github.com/swamiabhishek45/Kikoyu-Agent-SDK"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/@kikoyu/core"
            target="_blank"
            rel="noreferrer"
            className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
          >
            npm
          </a>
        </div>
      </div>
    </footer>
  );
}
