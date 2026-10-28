import React from 'react';
import Head from 'next/head';
import { SiteHeader } from '../components/SiteHeader';
import { HeroSection } from '../components/HeroSection';
import { LandingBackdrop } from '../components/LandingBackdrop';
import { CodeSandbox } from '../components/CodeSandbox';
import { MetricsBanner } from '../components/MetricsBanner';
import { CapabilitiesSection } from '../components/CapabilitiesSection';
import { AgentWorkspaceSection } from '../components/AgentWorkspaceSection';
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
import { GlowBorderCard } from '../components/ui/glow-border-card';

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

      <div className="kikoyu-layout dark relative min-h-screen font-sans">
        <LandingBackdrop />

        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />

          <HeroSection />

          <main className="mx-auto max-w-6xl space-y-0 px-4 md:px-6">
            <Section className="py-10 md:py-12">
              <MetricsBanner />
            </Section>

            <DeveloperExperience />
            <ExamplesSection />

            <Section className="py-12 md:py-16">
              <SectionHeader className="mb-8 md:mb-10">
                <Badge variant="outline" className="mb-1">
                  Interactive playground
                </Badge>
                <h2 className="text-2xl font-semibold tracking-tight text-[var(--kikoyu-text)] sm:text-3xl">
                  Try the API shape before you wire a model
                </h2>
                <p className="text-sm text-[var(--kikoyu-text-muted)]">
                  Snippets use the real public API. <strong className="font-medium text-[var(--kikoyu-text)]">Simulate run</strong>{' '}
                  prints the event sequence you would get from{' '}
                  <code className="font-mono text-xs">runner.stream()</code> — no API key required on
                  this page.
                </p>
              </SectionHeader>
              <GlowBorderCard
                width="100%"
                aspectRatio="unset"
                colorPreset="sunset"
                className="w-full bg-[var(--kikoyu-bg-elevated)]/90"
                borderRadius="0.75rem"
              >
                <CodeSandbox />
              </GlowBorderCard>
            </Section>

            <CapabilitiesSection />
            <ExecutionLifecycle />
            <AgentWorkspaceSection />
            <ArchitectureSection />
            <ReliabilitySection />
            <DocsPreview />
            <OpenSourceSection />
          </main>

          <FinalCTA />
          <Footer />
        </div>
      </div>
    </>
  );
}
