/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'reroyal': {
          'darkest': '#0a0015',
          'darker': '#1a002e',
          'dark': '#2d1b4e',
          'purple': '#4b0082',
          'violet': '#8b5cf6',
        },
        'accent': {
          'silver': '#f8fafc',
          'gold': '#fbbf24',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'Poppas', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-reroyal': 'linear-gradient(135deg, #0a0015 0%, #1a002e 50%, #2d1b4e 100%)',
        'gradient-purple': 'linear-gradient(135deg, #2d1b4e 0%, #4b0082 100%)',
      },
    },
  },
  plugins: [],
};
