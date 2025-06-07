// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Important: This line tells Tailwind to scan your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Define 'inter' font family
      },
    },
  },
  plugins: [],
}