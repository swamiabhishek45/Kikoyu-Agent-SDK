import 'nextra-theme-docs/style.css';
import '../styles/landing.css';
import { useState, useEffect } from 'react';
import { Source_Serif_4 } from 'next/font/google';

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['200', '400', '600'],
  variable: '--font-source-serif-4',
});

export default function App({ Component, pageProps }) {
  const [AnalyticsComponent, setAnalyticsComponent] = useState(null);

  useEffect(() => {
    import('@vercel/analytics/react')
      .then((mod) => setAnalyticsComponent(() => mod.Analytics))
      .catch(() => {});
  }, []);

  return (
    <div className={sourceSerif4.className}>
      <Component {...pageProps} />
      {AnalyticsComponent && <AnalyticsComponent />}
    </div>
  );
}
