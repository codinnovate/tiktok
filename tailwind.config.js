/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      caretColor: {
        blue: '#fe2c53', // Replace with your desired color
      },
    },
  },
  darkMode:'class',
  plugins: [

  ],
}