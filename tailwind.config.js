const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode:"jit",
  content: ['./index.html'],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins, sans-serif'],
      },
    },
  },
  plugins: [],
}
