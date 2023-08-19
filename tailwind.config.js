/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },

      borderWidth: {
        6: '6px',
      },

      colors: {
        violet: {
          25: '#fcfaff',
        },
      },

      keyframes: {
        SlideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        // SlideUpAndFade: {
        //   from: { opacity: 1 },
        //   to: { opacity: 0 },
        // },
      },

      animation: {
        SlideDownAndFade:
          'SlideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        // SlideUpAndFade: 'SlideUpAndFade 1s linear',
      },
    },
  },
  plugins: [],
}
