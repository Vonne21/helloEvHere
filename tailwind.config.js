/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,html,}",],
  theme: {
    extend: {
      colors: {
        royalBlue: {
          'rb':'#003f88',
        }
      },
      fontFamily: {
        'jersey': ['"Jersey 15"', 'sans-serif'],
        'pixelify': ['"Pixelify Sans"', 'serif'],
        'nabla': ['"Nabla"', 'serif'],
        'DotGothic16': ['"DotGothic16"', 'serif'],
        'Silkscreen': ['"Silkscreen"', 'sans-serif'],
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
}

