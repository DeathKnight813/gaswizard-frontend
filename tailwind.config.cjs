/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#1DB0c0',
      secondary: '#9EC51E',
      darkPrimary: '#232323',
      darkSecondary: '#555555'
    }
  },
  plugins: [],
});