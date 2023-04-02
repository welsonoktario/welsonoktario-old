/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-plus-jakarta)'],
      serif: ['var(--font-sentient)'],
      mono: ['var(--font-fraktion)'],
    },
    colors: {
      white: '#F4F3EE',
      black: '#1E1B18',
    },
    extend: {
      colors: {
        primary: '#263ACF',
        'primary-light': '#4153DC',
      },
    },
  },
  plugins: [],
}
