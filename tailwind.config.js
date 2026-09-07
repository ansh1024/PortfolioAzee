/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vellum: '#F4F4F2', // cool off-white paper base
        ink: '#111111', // true near-black
        redline: '#F03A17', // pen correction orange-red
        blueprint: '#2A4365', // deep blueprint blue
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        text: ['"Big Shoulders Text"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'blueprint-grid': 'linear-gradient(rgba(42, 67, 101, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(42, 67, 101, 0.1) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-rise': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'hero-stagger-1': 'fade-rise 600ms cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'hero-stagger-2': 'fade-rise 600ms cubic-bezier(0.23, 1, 0.32, 1) 50ms forwards',
        'hero-stagger-3': 'fade-rise 600ms cubic-bezier(0.23, 1, 0.32, 1) 100ms forwards',
      }
    },
  },
  plugins: [],
}
