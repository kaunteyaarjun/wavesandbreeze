/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0a192f',
          dark: '#111111',
          black: '#000000',
          deep: '#0f2744',
          blue: '#1b3b6f',
          royal: '#17468a',
          gold: '#cba135',
          goldLight: '#f5d77f',
          sand: '#f8f6f0',
          red: '#8b181b',
          crimson: '#9e1a1e',
          yellow: '#fff033',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Manrope"', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
        dmsans: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px -5px rgba(203, 161, 53, 0.3)',
        'glow-blue': '0 0 30px -5px rgba(2, 132, 199, 0.25)',
        'card': '0 10px 30px -10px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.02)',
        'card-hover': '0 20px 40px -15px rgba(10, 25, 47, 0.15)',
      }
    },
  },
  plugins: [],
}

