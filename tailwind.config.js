/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/3': '33.33%',
      '1/2': '50%',
      '2/3': '66.67%',
      '3/4': '75%',
      'full': '100%',
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/3': '33.33%',
      '1/2': '50%',
      '2/3': '66.67%',
      '3/4': '75%',
      'full': '100%',
      'screen': '100vh'
    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
    },
    extend: {
      colors: {
        light: "#13182A",
        middle: "#0E1627",
        dark: "#0D1321",
        logo: "#DC6333",
        lightcontrast: "#F3D05D",
        darkcontrast: "#326A6E"
      },
    }
  },
  variants: {},
  purge: false
}