import React from 'react';
import { Section, SectionHeader } from './ui/section';
import { Badge } from './ui/badge';
import { VERIFIED_TEST_COUNT } from '../lib/site-metrics';
import { SITE } from '../lib/site-config';

export function OpenSourceSection() {
  return (
    <Section className="border-t border-[var(--kikoyu-border)]">
      <SectionHeader>
        <Badge variant="outline" className="mb-1">
          Open source
        </Badge>
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-3xl">
          Inspect the source before you adopt it
        </h2>
        <p className="text-sm text-[var(--kikoyu-text-muted)]">
          MIT licensed, published on npm, with API reference generated from TypeScript — so what you
          read in docs is what the compiler exports.
        </p>
      </SectionHeader>

      <dl className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {[
          { term: 'Package', value: SITE.packageName, href: SITE.npm, detail: 'Install from npm; no vendor lock-in.' },
          { term: 'Version', value: `v${SITE.version}`, href: SITE.npm, detail: 'Track releases on npm or GitHub tags.' },
          { term: 'License', value: SITE.license, href: `${SITE.github}/blob/main/LICENSE`, detail: 'Use in commercial products.' },
          {
            term: 'Test suite',
            value: `${VERIFIED_TEST_COUNT} Vitest cases`,
            href: `${SITE.github}/tree/main/packages/core/test`,
            detail:
              'Core runner behavior is regression-tested. When docs show runner.run or runner.stream, those paths have automated coverage — not demo-only code.',
          },
        ].map((row) => (
          <div
            key={row.term}
            className="rounded-xl border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)] px-5 py-4"
          >
            <dt className="font-mono text-xs uppercase tracking-wider text-[var(--kikoyu-text-muted)]">
              {row.term}
            </dt>
            <dd className="mt-2">
              <a
                href={row.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-[var(--kikoyu-text)] hover:text-brand"
              >
                {row.value}
              </a>
              <p className="mt-2 text-xs leading-relaxed text-[var(--kikoyu-text-muted)]">{row.detail}</p>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-[var(--kikoyu-text-muted)]">
        Repository:{' '}
        <a href={SITE.github} className="text-brand hover:underline" target="_blank" rel="noreferrer">
          {SITE.github.replace('https://', '')}
        </a>
        . Open an issue or PR when something does not match the docs — we treat that as a product bug.
      </p>
    </Section>
  );
}
