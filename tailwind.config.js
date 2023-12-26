/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#fca404',
        secondary: '#000000',
        background: '#FFFFFF'
      },
      fontFamily:{
        header:['Satoshi'],
        logo:['Integral CF']
      }
    },
  },
  plugins: [],
}