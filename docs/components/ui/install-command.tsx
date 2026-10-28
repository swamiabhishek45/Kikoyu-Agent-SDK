import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '../../lib/utils';

type InstallCommandProps = {
  command: string;
  className?: string;
  /** Shown to screen readers when copy succeeds */
  successLabel?: string;
};

export function InstallCommand({ command, className, successLabel = 'Copied to clipboard' }: InstallCommandProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    []
  );

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }, [command]);

  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-lg border border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)] px-3 py-2 font-mono text-xs sm:text-sm',
        className
      )}
    >
      <span className="min-w-0 flex-1 truncate text-[var(--kikoyu-text-muted)]" aria-hidden>
        <span className="text-brand">$</span> {command}
      </span>
      <button
        type="button"
        onClick={copy}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-[var(--kikoyu-border)] px-2 py-1 text-xs text-[var(--kikoyu-text-muted)] transition-colors hover:border-zinc-600 hover:text-[var(--kikoyu-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        aria-label={copied ? successLabel : 'Copy install command'}
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden />
            <span className="hidden sm:inline">Copied</span>
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" aria-hidden />
            <span className="hidden sm:inline">Copy</span>
          </>
        )}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? successLabel : ''}
      </span>
    </div>
  );
}
