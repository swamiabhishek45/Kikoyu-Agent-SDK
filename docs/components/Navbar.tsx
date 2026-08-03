import React from 'react';
import Link from 'next/link';
import { ChevronDown, Github } from 'lucide-react';
import { KikoyuLogo } from './KikoyuLogo';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#070709]/80 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <div className="group-hover:scale-105 transition-transform">
            <KikoyuLogo className="h-8 w-8 text-[#ff5500]" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Kikoyu</span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          <Link href="/concepts/agent" className="text-zinc-400 hover:text-white transition-colors">
            Quickstart
          </Link>

          <div className="relative group cursor-pointer flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
            <span>Concepts</span>
            <ChevronDown className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-zinc-800 bg-zinc-950/95 p-2 shadow-xl backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/concepts/agent" className="block px-3 py-2 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">Agent Architecture</Link>
              <Link href="/concepts/model-providers" className="block px-3 py-2 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">Model Providers</Link>
              <Link href="/concepts/sessions" className="block px-3 py-2 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">Session State</Link>
            </div>
          </div>

          <Link href="/api-reference/README" className="text-zinc-400 hover:text-white transition-colors">
            API Reference
          </Link>

          <div className="relative group cursor-pointer flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
            <span>Examples</span>
            <ChevronDown className="h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-full left-0 mt-2 w-52 rounded-xl border border-zinc-800 bg-zinc-950/95 p-2 shadow-xl backdrop-blur-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link href="/examples/single-agent-tools" className="block px-3 py-2 text-xs text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors">Tool Calling Agent</Link>
            </div>
          </div>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/swamiabhishek45/Kikoyu-Agent-SDK"
            target="_blank"
            rel="noreferrer"
            title="GitHub Repository"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20 hover:scale-105 transition-all"
          >
            <Github className="h-4.5 w-4.5" />
          </a>

          <a
            href="https://www.npmjs.com/package/@kikoyu/core"
            target="_blank"
            rel="noreferrer"
            title="npm Package"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-[#cb3837] hover:border-white/20 hover:scale-105 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zM5.13 5.13h13.74v13.74h-3.435V8.565h-3.435v10.305H5.13V5.13z" />
            </svg>
          </a>

          <Link href="/concepts/agent" className="no-underline">
            <button className="vetra-btn-orange font-medium text-sm">
              Get started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}


