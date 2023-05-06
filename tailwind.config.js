/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "380px",
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
