'use client';

import dynamic from 'next/dynamic';

const WaveGridBackground = dynamic(
  () => import('./ui/wave-grid-background').then((m) => m.WaveGridBackground),
  { ssr: false }
);

export function LandingBackdrop() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.18]"
      aria-hidden
    >
      <WaveGridBackground
        className="h-full min-h-screen w-full"
        gridSize={36}
        colorBase="#18181b"
        colorHigh="#f97316"
        waveAmplitude={0.35}
        autoAnimate
        vignette
      />
    </div>
  );
}
