import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'border border-zinc-800 bg-zinc-900 text-zinc-300',
    secondary: 'bg-zinc-800/60 text-zinc-300 border border-zinc-800',
    outline: 'border border-zinc-700 text-zinc-400 bg-transparent',
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
