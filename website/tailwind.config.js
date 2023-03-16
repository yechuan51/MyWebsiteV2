/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sfPro: ["SF Pro Display", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
});
