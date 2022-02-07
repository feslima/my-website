const { fontFamily } = require('tailwindcss/defaultTheme');

const blinkKeyframe = {
  "50%": { opacity: 0.0 }
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: [
        "Roboto Slab", "serif",
        "Roboto Mono", 'monospace',
        ...fontFamily.sans
      ],
    },
    extend: {
      keyframes: {
        blink: blinkKeyframe,
      },
      animation: {
        blink: 'blink 1s step-start 0s infinite'
      },
      colors: {
        feslima: {
          DEFAULT: '#CD1AEA',
          '50': '#F2C2F9',
          '100': '#EEB0F8',
          '200': '#E68AF4',
          '300': '#DE65F1',
          '400': '#D640ED',
          '500': '#CD1AEA',
          '600': '#A411BB',
          '700': '#770C87',
          '800': '#4A0854',
          '900': '#1D0321'
        },
      }
    }
  },
  plugins: [],
}
