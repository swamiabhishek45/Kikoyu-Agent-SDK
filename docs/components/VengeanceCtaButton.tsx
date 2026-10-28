'use client';

import React from 'react';
import { useRouter } from 'next/router';
import AnimatedButton from './ui/animated-button';
import { cn } from '../lib/utils';

type VengeanceCtaButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export function VengeanceCtaButton({
  children,
  className,
  href,
  external,
  onClick,
}: VengeanceCtaButtonProps) {
  const router = useRouter();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || !href) return;
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
      return;
    }
    void router.push(href);
  };

  return (
    <AnimatedButton
      type="button"
      onClick={href || onClick ? handleClick : undefined}
      className={cn(
        'border-[var(--kikoyu-border)] bg-[var(--kikoyu-bg-elevated)] px-5 py-2.5 text-sm text-[var(--kikoyu-text)] shadow-none',
        '[--shine:rgba(249,115,22,0.85)] hover:bg-white/5',
        className
      )}
    >
      {children}
    </AnimatedButton>
  );
}
