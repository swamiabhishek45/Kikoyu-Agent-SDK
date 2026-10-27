import type { HookSidebarItem } from '@/components/ui/hook-sidebar';

type DirectoryItem = {
  type?: string;
  title?: string;
  name?: string;
  route?: string;
  href?: string;
  children?: DirectoryItem[];
};

export function flattenDirectories(
  directories: DirectoryItem[] | undefined,
): HookSidebarItem[] {
  if (!Array.isArray(directories)) return [];

  const items: HookSidebarItem[] = [];

  for (const item of directories) {
    if (item.type === 'separator') continue;

    const label = item.title ?? item.name;
    const href = item.href ?? item.route;
    if (label && href) {
      items.push({ label, href });
    }

    if (item.children?.length) {
      items.push(...flattenDirectories(item.children));
    }
  }

  return items;
}
