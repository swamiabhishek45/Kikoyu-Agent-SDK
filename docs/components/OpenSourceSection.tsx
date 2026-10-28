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
          Published on npm, MIT licensed, with a typed API reference generated from the core package.
        </p>
      </SectionHeader>

      <dl className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {[
          { term: 'Package', value: SITE.packageName, href: SITE.npm },
          { term: 'Version', value: `v${SITE.version}`, href: SITE.npm },
          { term: 'License', value: SITE.license, href: `${SITE.github}/blob/main/LICENSE` },
          { term: 'Test suite', value: `${VERIFIED_TEST_COUNT} Vitest cases`, href: `${SITE.github}/tree/main/packages/core/test` },
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
            </dd>
          </div>
        ))}
      </dl>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-[var(--kikoyu-text-muted)]">
        Repository:{' '}
        <a href={SITE.github} className="text-brand hover:underline" target="_blank" rel="noreferrer">
          {SITE.github.replace('https://', '')}
        </a>
        . Contributions and issues welcome on GitHub.
      </p>
    </Section>
  );
}
