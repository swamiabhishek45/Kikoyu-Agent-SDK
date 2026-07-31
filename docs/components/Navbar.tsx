import React from 'react';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Coffee, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-500/20 bg-white/80 backdrop-blur-md dark:bg-zinc-950/80">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-tr from-orange-500 to-amber-600 font-bold text-white shadow-md shadow-orange-500/30">
            <Coffee className="h-5 w-5 text-white" />
          </div>
          <div>
            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">Kikoyu</span>
            <span className="ml-1 text-xs text-orange-600 dark:text-orange-400 font-semibold">Agent SDK</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/concepts/agent" className="text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors">Quickstart</Link>
          <Link href="/concepts/agent" className="text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors">Concepts</Link>
          <Link href="/api-reference/README" className="text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors">API Reference</Link>
          <Link href="/examples/single-agent-tools" className="text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors">Examples</Link>
          <a
            href="https://github.com/swamiabhishek45/Kikoyu-Agent-SDK"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-600 hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400 transition-colors"
          >
            GitHub
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4 text-orange-400" /> : <Moon className="h-4 w-4 text-orange-600" />}
          </Button>

          <Link href="/concepts/agent" className="no-underline">
            <Button size="sm" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
