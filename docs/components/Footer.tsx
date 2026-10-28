import React from 'react';
import Link from 'next/link';
import { SITE } from '../lib/site-config';

const FOOTER_LINKS = [
  { label: 'Quickstart', href: '/quickstart', external: false },
  { label: 'API Reference', href: '/api-reference/README', external: false },
  { label: 'Examples', href: '/examples/single-agent-tools', external: false },
  { label: 'GitHub', href: SITE.github, external: true },
  { label: 'npm', href: SITE.npm, external: true },
  { label: 'License (MIT)', href: `${SITE.github}/blob/main/LICENSE`, external: true },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--kikoyu-border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-[var(--kikoyu-text-muted)]">
            Kikoyu Agent SDK · {SITE.packageName} v{SITE.version}
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2" aria-label="Footer">
            {FOOTER_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-[var(--kikoyu-text-muted)] no-underline hover:text-[var(--kikoyu-text)]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[var(--kikoyu-text-muted)] no-underline hover:text-[var(--kikoyu-text)]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        </div>
        <p className="text-center text-xs text-[var(--kikoyu-text-muted)] md:text-left">
          © {new Date().getFullYear()} Kikoyu · Open source under {SITE.license}
        </p>
      </div>
    </footer>
  );
}
