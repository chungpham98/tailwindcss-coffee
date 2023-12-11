/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
      colors: {
        coffee: {
          50: '#a25f4b33',
          200: '#c89f94',
          400: '#a25f4b',
          600: '#743f2f',
        },
      },
      letterSpacing: {
        '2px': '2px',
      },
      width: {
        940: '940px',
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeInUp: {
          '0%': {
            transform: 'translate3d(0px, 8px, 0px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translate3d(0px, 0px, 0px)',
            opacity: 1,
          },
        },
      },
      animation: {
        slideDown: 'slideDown .5s ease-in-out',
        fadeInUp: 'fadeInUp .4s ease-in-out',
      },
      transitionDuration: {
        400: '400ms',
      },
      gridTemplateColumns: {
        footer: '4fr 2fr 2fr 4fr',
      },
    },
  },
  plugins: [],
}
