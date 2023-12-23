/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xsm': '290px',
        'xsm': '430px',
        'sm': '675px',
        'md': '810px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1600px',
      },
      fontFamily: {
        'RubikDoodleShadow': ['Rubik Doodle Shadow', 'sans-serif']
      }
    },
  },
  plugins: [],
}

