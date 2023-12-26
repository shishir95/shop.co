/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#fca404'
      },
      fontFamily:{
        header:['Satoshi']
      }
    },
  },
  plugins: [],
}