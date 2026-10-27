export type DirectoryItem = {
  type?: string;
  title?: string;
  name?: string;
  route?: string;
  href?: string;
  children?: DirectoryItem[];
  withIndexPage?: boolean;
  isUnderCurrentDocsTree?: boolean;
};

export function directoryHref(item: DirectoryItem) {
  return item.href ?? item.route;
}

export function directoryLabel(item: DirectoryItem) {
  return item.title ?? item.name ?? '';
}

export function isFolder(item: DirectoryItem) {
  if (item.type === 'separator') return false;
  if (item.type === 'menu') return true;
  const children = item.children;
  if (!children?.length) return false;
  return children.length > 0 || !item.withIndexPage;
}

export function isLeafGroup(children: DirectoryItem[]) {
  return children.every(
    (child) => child.type !== 'separator' && !isFolder(child),
  );
}
