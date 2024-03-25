/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  theme: {
    extend: {
      animation: {
        typing: 'typing 2s steps(6), blink 1s infinite',
      },
      keyframes: {
        typing: {
          from: {
            width: '0'
          },
          to: {
            width: '6ch'
          },
        },
        blink: {
          from: {
            'border-right-color': 'transparent'
          },
          to: {
            'border-right-color': 'black'
          },
        },
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'customDarkGray': '#1e1e1e',
        'customLightGray': '#383838',
        'customLightGray2': '#424242',
        'customBlue': '#7e6ee0',
      },
      padding: {
        '50': '12.5rem',
        '75': '18.75rem',
        '100': '25rem',
      }
    },
  },
  plugins: [],
}

