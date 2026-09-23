/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './theme.config.jsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        brand: {
          DEFAULT: '#f97316',
          hover: '#ea580c',
          muted: 'rgba(249, 115, 22, 0.12)',
        },
        surface: {
          DEFAULT: '#09090b',
          elevated: '#18181b',
        },
      },
      borderColor: {
        subtle: 'rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
};
