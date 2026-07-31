import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline';
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const baseStyles =
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

  const variants = {
    default:
      'border-t-2 border-orange-500 bg-orange-500/10 text-orange-700 dark:text-orange-300 border-x border-b border-orange-500/20 backdrop-blur-md',
    secondary:
      'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100',
    outline:
      'border border-orange-500/30 text-orange-600 dark:text-orange-400',
  };

  return <div className={cn(baseStyles, variants[variant], className)} {...props} />;
}
