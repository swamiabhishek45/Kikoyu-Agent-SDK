import React from 'react';

export function KikoyuLogo({ className = 'h-8 w-8', color = '#ff5500' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="kikoyuLogoGradFixed" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#ff7700" />
          <stop offset="50%" stopColor="#ff5500" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>

      {/* Outer Glowing Circle */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="url(#kikoyuLogoGradFixed)"
        strokeWidth="4"
      />

      {/* Prominent Vertical Center Line (Path used to avoid zero-width SVG line gradient collapse) */}
      <path
        d="M 50 8 L 50 92"
        stroke="#ff5500"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Continuous Loop forming the stylized 'K' Mark */}
      <path
        d="M 82 22 L 50 50 C 34 32 14 30 14 46 C 14 62 34 56 50 50 L 84 76"
        stroke="url(#kikoyuLogoGradFixed)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
