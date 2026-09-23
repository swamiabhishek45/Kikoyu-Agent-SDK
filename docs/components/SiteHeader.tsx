import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Github, Menu, X } from 'lucide-react';
import { KikoyuLogo } from './KikoyuLogo';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

const CONCEPT_LINKS = [
  { href: '/concepts/agent', label: 'Agent architecture' },
  { href: '/concepts/model-providers', label: 'Model providers' },
  { href: '/concepts/sessions', label: 'Session state' },
];

const EXAMPLE_LINKS = [
  { href: '/examples/single-agent-tools', label: 'Single agent with tools' },
  { href: '/examples/multi-agent-handoff', label: 'Multi-agent handoff' },
];

function NavDropdown({
  label,
  links,
}: {
  label: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5 opacity-70" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-md border border-zinc-200 bg-white py-1 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 dark:border-zinc-800 dark:bg-zinc-950">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-3 py-2 text-sm text-zinc-600 no-underline hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/90 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/90">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <KikoyuLogo className="h-6 w-auto" />
          <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Kikoyu</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/quickstart" className="text-sm text-zinc-600 no-underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">
            Quickstart
          </Link>
          <NavDropdown label="Concepts" links={CONCEPT_LINKS} />
          <Link
            href="/api-reference/README"
            className="text-sm text-zinc-600 no-underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            API Reference
          </Link>
          <NavDropdown label="Examples" links={EXAMPLE_LINKS} />
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://github.com/swamiabhishek45/Kikoyu-Agent-SDK"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-600 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <Link href="/quickstart" className="no-underline">
            <Button variant="primary" size="sm">
              Get started
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <div
        className={cn(
          'border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 md:hidden',
          mobileOpen ? 'block' : 'hidden'
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
          <Link href="/quickstart" className="rounded-md px-2 py-2 text-sm text-zinc-300 no-underline hover:bg-zinc-900">
            Quickstart
          </Link>
          <p className="px-2 pt-2 text-xs font-medium uppercase tracking-wide text-zinc-500">Concepts</p>
          {CONCEPT_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md px-2 py-2 text-sm text-zinc-400 no-underline hover:bg-zinc-900">
              {link.label}
            </Link>
          ))}
          <Link href="/api-reference/README" className="rounded-md px-2 py-2 text-sm text-zinc-300 no-underline hover:bg-zinc-900">
            API Reference
          </Link>
          <p className="px-2 pt-2 text-xs font-medium uppercase tracking-wide text-zinc-500">Examples</p>
          {EXAMPLE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md px-2 py-2 text-sm text-zinc-400 no-underline hover:bg-zinc-900">
              {link.label}
            </Link>
          ))}
          <Link href="/quickstart" className="pt-2 no-underline">
            <Button variant="primary" className="w-full">
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
