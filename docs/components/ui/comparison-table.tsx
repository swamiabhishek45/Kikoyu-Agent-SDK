import React from 'react';
import { Card } from './card';

export interface ComparisonRow {
  feature: string;
  kikoyu: string;
  traditional: string;
}

export function ComparisonTable({
  title,
  description,
  rows,
}: {
  title: string;
  description?: string;
  rows: ComparisonRow[];
}) {
  return (
    <Card className="overflow-hidden p-0">
      <div className="border-b border-zinc-200 px-6 py-8 text-center dark:border-zinc-800">
        <h3 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">{title}</h3>
        {description ? <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{description}</p> : null}
      </div>
      <div className="overflow-x-auto px-6 pb-6">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr className="border-b border-zinc-200 text-xs uppercase tracking-wide text-zinc-500 dark:border-zinc-800">
              <th className="pb-3 pr-4 font-medium">Feature</th>
              <th className="pb-3 pr-4 font-medium text-brand">Kikoyu SDK</th>
              <th className="pb-3 font-medium">Traditional frameworks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
            {rows.map((row) => (
              <tr key={row.feature} className="text-zinc-700 dark:text-zinc-300">
                <td className="py-4 pr-4 font-medium text-zinc-900 dark:text-zinc-100">{row.feature}</td>
                <td className="py-4 pr-4 text-zinc-900 dark:text-zinc-100">{row.kikoyu}</td>
                <td className="py-4 text-zinc-500">{row.traditional}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
