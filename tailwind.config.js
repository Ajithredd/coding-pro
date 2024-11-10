/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        teal: {
          500: '#5fc0e4',
          600: '#1c82d0',
          700: '#0d4c8c',
          200: '#a3e2f2',
          300: '#5fc0e4',
        },
        blue: {
          300: '#82b9eb',
        }
      },
      spacing: {
        '96': '24rem', // For larger card widths if needed
      }
    }
  }
}
