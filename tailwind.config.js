/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#000",
        primaryRed: "#EF4444",
        primaryBlue: "#2563EB",
        secondaryDark: "#282b30",
      },
    },
  },
  darkMode: "class", // Enable dark mode with class-based switching
  plugins: [],
};
