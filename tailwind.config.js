module.exports = {
  purge: {
    enabled: true,
    content: ['*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      inter: ['Inter', 'serif'],
      Lexend: ['Lexend Deca', 'serif'],
    },
    extend: {
      colors:{
        'dark-blue': 'hsl(233, 47%, 7%)',
        'desaturated-blue': 'hsl(244, 38%, 16%)',
        'Soft-violet': 'hsl(277, 64%, 61%)',
      },
      screens: {
        'xls': '1440px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
