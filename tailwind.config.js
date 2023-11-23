/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      padding: {
        'desktop-padding': '10vw',
      },
      colors: {
        'strong-black': '#171515',
        'lighter-black': '#332E2E',
        'light-black': '#211E1E',
        'dimmed-white': '#EDEDF4',
        'bright-red': '#C42021',
      },
    },
  },
  plugins: [],
}

