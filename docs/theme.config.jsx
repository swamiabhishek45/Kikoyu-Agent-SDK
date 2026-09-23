import React from 'react';
import { KikoyuLogo } from './components/KikoyuLogo';

export default {
  logo: (
    <span className="flex items-center gap-2 text-sm font-semibold tracking-tight">
      <KikoyuLogo className="h-5 w-auto shrink-0" alt="Kikoyu" />
      <span className="text-gray-900 dark:text-zinc-100">Kikoyu</span>
      <span className="font-normal text-gray-500 dark:text-zinc-500">Docs</span>
    </span>
  ),
  head: (
    <>
      <link rel="icon" href="/logo.png" type="image/png" />
      <meta name="theme-color" content="#09090b" />
    </>
  ),
  project: {
    link: 'https://github.com/swamiabhishek45/Kikoyu-Agent-SDK',
  },
  docsRepositoryBase: 'https://github.com/swamiabhishek45/Kikoyu-Agent-SDK/tree/main/docs',
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: 'Kikoyu Agent SDK © 2026',
  },
  copyCode: {
    show: true,
  },
  primaryHue: 24,
  darkMode: true,
  nextThemes: {
    defaultTheme: 'light',
    attribute: 'class',
  },
};
