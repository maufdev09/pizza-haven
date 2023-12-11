/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#f13a01',
       },
    },
    fontFamily:{
      abc:['Roboto', 'sans-serif']

    }
  },
  plugins: [require("daisyui")],
}

