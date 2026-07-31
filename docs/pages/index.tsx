import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { CodeSandbox } from '../components/CodeSandbox';
import { MetricsBanner } from '../components/MetricsBanner';
import { BentoGrid } from '../components/BentoGrid';
import { ComparisonMatrix } from '../components/ComparisonMatrix';
import { Footer } from '../components/Footer';

export default function LandingPage() {
  return (
    <ThemeProvider>
      <div className="vk-layout">
        <Navbar />
        <main className="vk-main">
          <HeroSection />
          <CodeSandbox />
          <MetricsBanner />
          <BentoGrid />
          <ComparisonMatrix />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
