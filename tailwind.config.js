/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#071a33',
          petrol: '#0c5f66',
          green: '#3a8f5f',
          red: '#b94a4d',
          mist: '#f5f7f8',
          ink: '#263342',
        },
      },
      boxShadow: {
        soft: '0 14px 36px rgba(7, 26, 51, 0.10)',
        line: '0 1px 0 rgba(7, 26, 51, 0.08)',
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
