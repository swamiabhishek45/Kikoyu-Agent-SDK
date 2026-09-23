import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-zinc-200 py-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-zinc-500 dark:text-zinc-500 md:flex-row md:px-6">
        <p>Kikoyu Agent SDK © 2026</p>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link href="/quickstart" className="no-underline hover:text-zinc-800 dark:hover:text-zinc-300">
            Docs
          </Link>
          <Link href="/api-reference/README" className="no-underline hover:text-zinc-800 dark:hover:text-zinc-300">
            API Reference
          </Link>
          <a
            href="https://github.com/swamiabhishek45/Kikoyu-Agent-SDK"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-800 dark:hover:text-zinc-300"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/@kikoyu/core"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-800 dark:hover:text-zinc-300"
          >
            npm
          </a>
        </div>
      </div>
    </footer>
  );
}
