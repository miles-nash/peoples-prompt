/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures all your component files are scanned
  ],
  theme: {
    extend: {
      boxShadow: {
        zine: "6px 6px 0 0 rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
};