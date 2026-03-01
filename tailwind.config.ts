import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'from-cream/90',
    'via-cream/80',
    'bg-accent/10',
    'bg-primary/5',
    'border-primary/20',
    'text-cream/80',
    'text-cream/60',
    'text-cream/40',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F0E8',
        foreground: '#1a1a1a',
        primary: '#6B4423',
        accent: '#D4A574',
        cream: '#F5F0E8',
        'cream-white': '#F5F0E8',
        muted: '#9E8B7E',
        'toasted-brown': '#6B4423',
        'golden-wheat': '#D4A574',
      },
      fontFamily: {
        display: ['var(--font-display)', 'monospace'],
        body: ['var(--font-body)', 'serif'],
        sans: ['var(--font-body)', 'serif'],
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-bottom))',
      },
    },
  },
  plugins: [],
}

export default config
