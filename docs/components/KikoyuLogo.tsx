import React from 'react';

export function KikoyuLogo({
  className = 'h-8 w-auto object-contain',
  alt = 'Kikoyu Logo',
}: {
  className?: string;
  color?: string;
  alt?: string;
}) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      className={`block shrink-0 object-contain ${className}`}
    />
  );
}

