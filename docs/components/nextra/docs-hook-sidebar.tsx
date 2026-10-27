'use client';

import { useMemo, type ComponentProps } from 'react';
import { useRouter } from 'next/router';
import {
  HookSidebar,
  type HookSidebarItem,
} from '@/components/ui/hook-sidebar';

function hrefOf(item: HookSidebarItem) {
  return typeof item === 'string' ? undefined : item.href;
}

function matchesRoute(pathname: string, href: string) {
  const path = pathname.replace(/\/$/, '') || '/';
  const target = href.replace(/\/$/, '') || '/';
  return path === target || path.startsWith(`${target}/`);
}

export function DocsHookSidebar({
  items,
  ...props
}: ComponentProps<typeof HookSidebar>) {
  const router = useRouter();
  const pathname = router.asPath.split(/[?#]/)[0];

  const activeIndex = useMemo(() => {
    let best = -1;
    let bestLen = -1;
    items.forEach((item, index) => {
      const href = hrefOf(item);
      if (!href || !matchesRoute(pathname, href)) return;
      const len = href.length;
      if (len > bestLen) {
        bestLen = len;
        best = index;
      }
    });
    return best;
  }, [items, pathname]);

  return (
    <HookSidebar
      items={items}
      value={activeIndex >= 0 ? activeIndex : undefined}
      {...props}
    />
  );
}
