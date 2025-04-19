/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,html,}",],
  theme: {
    extend: {
      colors: {
        royalBlue: {
          'rb':'#003f88',
        },
        blue: {
          '666': '#D5E4F7',
        }
      },
      fontFamily: {
        'jersey': ['"Jersey 15"', 'sans-serif'],
        'pixelify': ['"Pixelify Sans"', 'serif'],
        'nabla': ['"Nabla"', 'serif'],
        'DotGothic16': ['"DotGothic16"', 'serif'],
        'Silkscreen': ['"Silkscreen"', 'sans-serif'],
        'Quicksand': ['"Quicksand"', 'sans-serif'],
        'Quantico': ['"Quantico"', 'sans-serif'],
        'Chakra': ['"Chakra Petch"', 'sans-serif'],
        'Figtree': ['"Figtree"', 'sans-serif'],
      },
      display: ["group-hover"],

      animation: {
        'infinite-scroll': 'infinite-scroll 4s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
}

