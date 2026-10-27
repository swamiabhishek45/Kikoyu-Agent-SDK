'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useConfig } from 'nextra-theme-docs';
import { DocsHookSidebar } from './docs-hook-sidebar';
import { flattenDirectories } from './flatten-directories';

const BRAND_RAIL = '#f97316';

export function SidebarMenuBridge() {
  return <SidebarMenuBridgeInner />;
}

function useMenuHosts(selector: string) {
  const [hosts, setHosts] = useState<HTMLElement[]>([]);

  useEffect(() => {
    const sync = () => {
      setHosts(Array.from(document.querySelectorAll<HTMLElement>(selector)));
    };

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener('resize', sync);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, [selector]);

  return hosts;
}

function SidebarMenuBridgeInner() {
  const config = useConfig();
  const { docsDirectories, directories } = config.normalizePagesResult;

  const desktopHosts = useMenuHosts('.nextra-menu-desktop');
  const mobileHosts = useMenuHosts('.nextra-menu-mobile');

  const desktopItems = flattenDirectories(docsDirectories);
  const mobileItems = flattenDirectories(directories);

  return (
    <>
      {desktopHosts.map((host, index) =>
        createPortal(
          <DocsHookSidebar
            key={`desktop-${index}`}
            items={desktopItems}
            color={BRAND_RAIL}
            className="max-md:hidden"
          />,
          host,
        ),
      )}
      {mobileHosts.map((host, index) =>
        createPortal(
          <DocsHookSidebar
            key={`mobile-${index}`}
            items={mobileItems}
            color={BRAND_RAIL}
            className="md:hidden"
          />,
          host,
        ),
      )}
    </>
  );
}
