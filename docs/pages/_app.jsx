import 'nextra-theme-docs/style.css';
import '../styles/landing.css';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }) {
  const [AnalyticsComponent, setAnalyticsComponent] = useState(null);

  useEffect(() => {
    import('@vercel/analytics/react')
      .then((mod) => setAnalyticsComponent(() => mod.Analytics))
      .catch(() => {});
  }, []);

  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
      {AnalyticsComponent && <AnalyticsComponent />}
    </div>
  );
}
