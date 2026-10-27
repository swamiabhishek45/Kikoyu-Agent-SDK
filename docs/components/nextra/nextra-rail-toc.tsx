'use client';

import { RailToc } from '@/components/ui/rail-toc';

type Heading = {
  id: string;
  value: string;
  depth: number;
};

export function NextraRailToc({ toc }: { toc: Heading[]; filePath?: string }) {
  if (!Array.isArray(toc) || !toc.length) return null;

  const items = toc.map(({ id, value, depth }) => ({
    id,
    label: value,
    depth: Math.max(0, depth - 2),
  }));

  return (
    <div
      className="sticky top-[var(--nextra-navbar-height)] max-h-[calc(100vh-var(--nextra-navbar-height))] overflow-y-auto px-4 pt-6 nextra-scrollbar"
    >
      <RailToc items={items} title="On this page" />
    </div>
  );
}
