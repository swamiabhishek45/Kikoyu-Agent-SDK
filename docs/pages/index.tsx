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
      <div className="vk-layout font-sans text-white bg-[#070709] min-h-screen">
        <Navbar />

        {/* Outer Hero Container with Vetra Stars Grid & Orange Horizon Arc */}
        <div className="vetra-hero-wrapper relative">
          <div className="vetra-dots-bg"></div>
          <div className="vetra-lines-bg"></div>
          <div className="vetra-top-glow-left"></div>
          <div className="vetra-top-glow-right"></div>

          {/* Hero Section Header, Title, Badges, CTAs */}
          <HeroSection />

          {/* Glowing Horizon Arc Curve */}
          <div className="vetra-horizon-container">
            <div className="vetra-horizon-arc"></div>
          </div>

          {/* Terminal Code Sandbox Peeking Up over Horizon Arc */}
          <div className="relative z-20 -mt-[430px] sm:-mt-[450px] px-4 md:px-8">
            <CodeSandbox />
          </div>
        </div>

        {/* Lower Content Sections */}
        <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
          <MetricsBanner />
          <BentoGrid />
          <ComparisonMatrix />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}


