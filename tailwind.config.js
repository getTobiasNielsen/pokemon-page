/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "blue-pokemon": "#367aac",
        "ugly-darkblue": "#1f374a",
        "ugly-gray": "#4b4343",
      },
    },
  },
  plugins: [require("daisyui")],
};
