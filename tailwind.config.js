/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#191919',
        'red' : '#F54748',
        'orange' : '#FDC55E'
      },
      fontFamily: {
        'sofia' : 'Sofia Sans Semi Condensed',
        'inter' : 'Inter',
      }
    },
  },
  plugins: [],
}

