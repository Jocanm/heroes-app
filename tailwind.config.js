const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      amber: colors.amber,
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      orange: colors.orange,
      purple: colors.purple,
      lime: colors.lime,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      white:colors.white,
      indigo: colors.indigo,
      violet: colors.violet,
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose
      //My custom colors by: Jose Angarita
      // cyan: {
      //   strongest: '#00494d',
      //   strong: '#26c0ab',
      //   darkest: '#5e7a7d',
      //   dark: '#7f9c9f',
      //   light: '#c5e4e7',
      //   lightest: '#f4fafa'
      // }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
