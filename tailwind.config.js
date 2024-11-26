/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        hero:'url("/src/assets/hero.jpg")',
        hero2:'url("/src/assets/bg2.jpg")'
      }
    },
  },
  plugins: [],
}

