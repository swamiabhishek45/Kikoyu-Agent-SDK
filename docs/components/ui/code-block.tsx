import React from 'react';
import { cn } from '../../lib/utils';

export function CodeBlock({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  return (
    <pre
      className={cn(
        'overflow-x-auto rounded-md border border-zinc-200 bg-zinc-50 p-4 text-[13px] leading-relaxed font-mono text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300',
        className
      )}
    >
      <code>{code}</code>
    </pre>
  );
}
