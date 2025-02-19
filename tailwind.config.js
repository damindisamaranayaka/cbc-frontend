/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",   // If you have an HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all files in the src folder
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
