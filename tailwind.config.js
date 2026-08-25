/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0a0b',
          soft: '#111113',
          raised: '#17171a',
        },
        paper: {
          DEFAULT: '#f4f3ef',
          dim: '#c9c8c2',
          faint: '#8c8b87',
        },
        line: 'rgba(244, 243, 239, 0.10)',
        'line-strong': 'rgba(244, 243, 239, 0.18)',
        signal: {
          DEFAULT: '#ff3d63',
          dim: '#c22e4c',
          bright: '#ff6b87',
        },
      },
      fontFamily: {
        sans: ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        '10': ['0.625rem', { lineHeight: '1rem', letterSpacing: '0.06em' }],
      },
      maxWidth: {
        content: '84rem',
      },
      backgroundImage: {
        grid: 'linear-gradient(to right, rgba(244,243,239,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,243,239,0.06) 1px, transparent 1px)',
        noise: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        marquee: 'marquee 32s linear infinite',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
