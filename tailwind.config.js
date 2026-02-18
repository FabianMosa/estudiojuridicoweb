/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6eef5',
          100: '#ccdcea',
          200: '#99b9d5',
          300: '#6697c0',
          400: '#3374ab',
          500: '#005196',
          600: '#004178',
          700: '#00315a',
          800: '#00203c',
          900: '#00101e',
          950: '#000a11',
        },
        gold: {
          50: '#fefbf3',
          100: '#fdf6e7',
          200: '#faedcf',
          300: '#f8e4b7',
          400: '#f5db9f',
          500: '#d4af37',
          600: '#aa8c2c',
          700: '#806921',
          800: '#554616',
          900: '#2b230b',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
