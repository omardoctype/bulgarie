/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B2A4A',
          deep: '#08213D',
          petrol: '#0E8C86',
          green: '#2E9A59',
          red: '#E53935',
          mist: '#F6F8FA',
          ink: '#263342',
        },
      },
      boxShadow: {
        soft: '0 14px 36px rgba(8, 33, 61, 0.10)',
        line: '0 1px 0 rgba(8, 33, 61, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
