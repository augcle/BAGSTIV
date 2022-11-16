/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './tailwind.config.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'fugaz': [
            '"Fugaz One"'
        ]
      }
    },
  },
  plugins: [],
}