/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#070b13',
        ink: '#e6edf6',
        navy: '#d8e8ff',
        slateLine: '#27354a',
        paper: '#0b111d',
        mist: '#111b2c',
        teal: '#72d1d2',
        brass: '#d8ad5b',
        clay: '#9a4f2e',
      },
      boxShadow: {
        soft: '0 18px 48px rgba(0, 0, 0, 0.28)',
      },
    },
  },
  plugins: [],
};
