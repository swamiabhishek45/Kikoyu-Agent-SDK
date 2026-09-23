import React from 'react';
import { cn } from '../../lib/utils';

export function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn('py-16 md:py-20', className)} {...props}>
      {children}
    </section>
  );
}

export function SectionHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto mb-12 max-w-2xl text-center space-y-3', className)} {...props}>
      {children}
    </div>
  );
}
