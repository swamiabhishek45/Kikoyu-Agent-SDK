import React from 'react';
import Head from 'next/head';
import { SiteHeader } from '../components/SiteHeader';
import { HeroSection } from '../components/HeroSection';
import { CodeSandbox } from '../components/CodeSandbox';
import { MetricsBanner } from '../components/MetricsBanner';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { ExecutionLifecycle } from '../components/ExecutionLifecycle';
import { DeveloperExperience } from '../components/DeveloperExperience';
import { ExamplesSection } from '../components/ExamplesSection';
import { ArchitectureSection } from '../components/ArchitectureSection';
import { ReliabilitySection } from '../components/ReliabilitySection';
import { DocsPreview } from '../components/DocsPreview';
import { OpenSourceSection } from '../components/OpenSourceSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { Section, SectionHeader } from '../components/ui/section';
import { Badge } from '../components/ui/badge';
export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Kikoyu — TypeScript Agent SDK</title>
        <meta
          name="description"
          content="TypeScript-first AI agent SDK with Zod tools, handoffs, session memory, guardrails, and streaming events."
        />
        <meta property="og:title" content="Kikoyu — TypeScript Agent SDK" />
        <meta
          property="og:description"
          content="Build AI agents with type-safe tools, multi-agent handoffs, and real-time streaming."
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="kikoyu-layout min-h-screen font-sans">
        <SiteHeader />

        <HeroSection />

        <Section className="py-12 md:py-16">
          <SectionHeader className="mb-8 md:mb-10">
            <Badge variant="outline" className="mb-1">
              Interactive playground
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-3xl">
              SDK examples with simulated output
            </h2>
            <p className="text-sm text-[var(--kikoyu-text-muted)]">
              Code snippets match the public API. Click Simulate run to preview event logs — not a live
              model execution.
            </p>
          </SectionHeader>
          <div className="mx-auto max-w-6xl">
            <CodeSandbox />
          </div>
        </Section>

        <main className="mx-auto max-w-6xl space-y-0 px-4 md:px-6">
          <Section className="py-10 md:py-12">
            <MetricsBanner />
          </Section>
          <CapabilitiesSection />
          <ExecutionLifecycle />
          <DeveloperExperience />
          <ExamplesSection />
          <ArchitectureSection />
          <ReliabilitySection />
          <DocsPreview />
          <OpenSourceSection />
        </main>

        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}
