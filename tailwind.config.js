/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // adjust per your project
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: "#3F4A6B",
        primaryDarker: "#1F1F29",
        primaryLight: "#7FB3FF",
        primaryLighter: "#E0E8FF",
        black: "#000000",
        grayLight: "#D9D9D9",
        white: "#FFFFFF",
      },
      fontFamily: {
        heading: ["'Barlow Condensed'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
