/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        'navbar-bg': "#050816", // Example color for the background
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        'navbar-shadow': '5px -1px 12px -5px rgba(0, 0, 0, 0.1)', // Example shadow
      },
      fontFamily: {
      lexend: ['Lexend', 'sans-serif'], // Add Lexend font
      playfair: ['Playfair Display', 'serif'],
      leagueSpartan: ['League Spartan', 'sans-serif'],

      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};