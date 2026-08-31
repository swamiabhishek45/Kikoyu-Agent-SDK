import React from 'react';

export default {
  logo: (
    <span className="flex items-center gap-2.5 font-bold tracking-tight">
      <img src="/logo.png" alt="Kikoyu Logo" className="h-6 w-auto object-contain inline-block" />
      <span>Kikoyu Agent SDK <span className="font-normal opacity-70">Docs</span></span>
    </span>
  ),
  head: (
    <>
      <link rel="icon" href="/logo.png" type="image/png" />
      <link rel="shortcut icon" href="/logo.png" />
      <meta name="msapplication-TileColor" content="#070709" />
      <meta name="theme-color" content="#070709" />
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
    text: 'Kikoyu Agent SDK Documentation © 2026',
  },
  copyCode: {
    show: true,
  },
};
