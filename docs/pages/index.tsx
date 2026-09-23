import React from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { HeroSection } from '../components/HeroSection';
import { CodeSandbox } from '../components/CodeSandbox';
import { MetricsBanner } from '../components/MetricsBanner';
import { BentoGrid } from '../components/BentoGrid';
import { ComparisonMatrix } from '../components/ComparisonMatrix';
import { Footer } from '../components/Footer';
import { Section } from '../components/ui/section';

export default function LandingPage() {
  return (
    <div className="kikoyu-layout min-h-screen font-sans">
      <SiteHeader />

      <HeroSection />

      <Section className="py-0 pb-16 pt-2">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <CodeSandbox />
        </div>
      </Section>

      <main className="mx-auto max-w-6xl space-y-4 px-4 md:px-6">
        <MetricsBanner />
        <BentoGrid />
        <ComparisonMatrix />
      </main>

      <Footer />
    </div>
  );
}
