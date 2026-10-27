'use client';

import { useCallback, useMemo, useState, type ComponentProps } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DocsHookSidebar } from './docs-hook-sidebar';
import {
  directoryHref,
  directoryLabel,
  isFolder,
  isLeafGroup,
  type DirectoryItem,
} from './directory-types';

const BRAND = '#f97316';

function normalizePath(path: string) {
  const base = path.split(/[?#]/)[0].replace(/\/$/, '') || '/';
  return base;
}

function matchesRoute(pathname: string, href: string) {
  const path = normalizePath(pathname);
  const target = normalizePath(href);
  return path === target || path.startsWith(`${target}/`);
}

function routeInside(pathname: string, route: string | undefined) {
  if (!route) return false;
  const path = normalizePath(pathname);
  const base = normalizePath(route);
  return path === base || path.startsWith(`${base}/`);
}

function linkClass(active: boolean) {
  return cn(
    'flex rounded-lg px-2 py-1.5 text-sm transition-colors [word-break:break-word]',
    active
      ? 'bg-orange-500/10 font-semibold text-orange-500'
      : 'text-foreground/50 hover:bg-muted hover:text-foreground/90',
  );
}

function folderClass(activeInside: boolean) {
  return cn(
    'flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-left text-sm transition-colors',
    activeInside
      ? 'font-semibold text-orange-500'
      : 'text-foreground/50 hover:bg-muted hover:text-foreground/90',
  );
}

function NavFile({
  item,
  pathname,
  onNavigate,
}: {
  item: DirectoryItem;
  pathname: string;
  onNavigate?: () => void;
}) {
  const href = directoryHref(item);
  const label = directoryLabel(item);
  if (!href || !label) return null;

  const active = matchesRoute(pathname, href);

  return (
    <li>
      <Link
        href={href}
        className={linkClass(active)}
        aria-current={active ? 'page' : undefined}
        onClick={onNavigate}
      >
        {label}
      </Link>
    </li>
  );
}

function NavFolder({
  item,
  pathname,
  defaultOpen,
  onlyCurrentDocs,
  onNavigate,
}: {
  item: DirectoryItem;
  pathname: string;
  defaultOpen: boolean;
  onlyCurrentDocs?: boolean;
  onNavigate?: () => void;
}) {
  const route = item.route;
  const label = directoryLabel(item);
  const children = item.children ?? [];
  const [open, setOpen] = useState(defaultOpen);

  const activeInside = routeInside(pathname, route);
  const toggle = useCallback(() => setOpen((value) => !value), []);

  const visibleChildren = useMemo(
    () =>
      children.filter(
        (child) =>
          child.type !== 'separator' &&
          (!onlyCurrentDocs || child.isUnderCurrentDocsTree !== false),
      ),
    [children, onlyCurrentDocs],
  );

  if (!label) return null;

  const leafHook = open && isLeafGroup(visibleChildren);
  const hookItems = leafHook
    ? visibleChildren
        .map((child) => {
          const href = directoryHref(child);
          const childLabel = directoryLabel(child);
          if (!href || !childLabel) return null;
          return { label: childLabel, href };
        })
        .filter(Boolean)
    : [];

  return (
    <li className={cn({ open: open && activeInside })}>
      <button
        type="button"
        className={folderClass(activeInside)}
        aria-expanded={open}
        onClick={toggle}
      >
        <span>{label}</span>
        <ChevronRight
          className={cn(
            'size-[18px] shrink-0 rounded-sm p-0.5 transition-transform',
            open && 'rotate-90',
          )}
          aria-hidden
        />
      </button>
      {open && visibleChildren.length > 0 && (
        <div
          className={cn(
            'relative pt-1 ltr:ml-3 rtl:mr-3',
            !leafHook &&
              'ltr:border-l ltr:border-border ltr:pl-3 rtl:border-r rtl:pr-3',
          )}
        >
          {leafHook ? (
            <DocsHookSidebar
              items={hookItems as { label: string; href: string }[]}
              color={BRAND}
              dashed
              className="pb-1"
            />
          ) : (
            <NavList
              directories={visibleChildren}
              pathname={pathname}
              onlyCurrentDocs={onlyCurrentDocs}
              onNavigate={onNavigate}
            />
          )}
        </div>
      )}
    </li>
  );
}

function NavList({
  directories,
  pathname,
  onlyCurrentDocs,
  onNavigate,
}: {
  directories: DirectoryItem[];
  pathname: string;
  onlyCurrentDocs?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <ul className="flex flex-col gap-1">
      {directories.map((item) => {
        if (item.type === 'separator') return null;
        if (onlyCurrentDocs && item.isUnderCurrentDocsTree === false) {
          return null;
        }

        if (isFolder(item)) {
          return (
            <NavFolder
              key={item.name ?? item.route ?? directoryLabel(item)}
              item={item}
              pathname={pathname}
              defaultOpen={routeInside(pathname, item.route)}
              onlyCurrentDocs={onlyCurrentDocs}
              onNavigate={onNavigate}
            />
          );
        }

        return (
          <NavFile
            key={item.name ?? item.route ?? directoryLabel(item)}
            item={item}
            pathname={pathname}
            onNavigate={onNavigate}
          />
        );
      })}
    </ul>
  );
}

export function DocsNavSidebar({
  directories,
  onlyCurrentDocs,
  className,
  ...props
}: {
  directories: DirectoryItem[] | undefined;
  onlyCurrentDocs?: boolean;
} & ComponentProps<'nav'>) {
  const router = useRouter();
  const pathname = router.asPath;

  if (!directories?.length) return null;

  return (
    <nav
      data-slot="docs-nav-sidebar"
      aria-label="Docs"
      className={cn('flex flex-col', className)}
      {...props}
    >
      <NavList
        directories={directories}
        pathname={pathname}
        onlyCurrentDocs={onlyCurrentDocs}
      />
    </nav>
  );
}
