/** @type {import('tailwindcss').Config} */
const {screens} = require('./theme-extend-tailwind/theme.extend.breakpoints');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens
    },
  },
  plugins: [],
}
