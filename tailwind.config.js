module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '29-rem': '29rem',
      },
      margin: {
        '46%': '46%',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
