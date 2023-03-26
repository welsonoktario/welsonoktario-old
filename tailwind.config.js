/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-plus-jakarta)'],
      serif: ['var(--font-sentient)'],
      mono: ['var(--font-fraktion)'],
    },
    extend: {
      colors: {
        primary: '#263ACF',
      },
    },
  },
  plugins: [],
}
