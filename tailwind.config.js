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
          DEFAULT: '#D12DEC',
          '50': '#F2D5FB',
          '100': '#EDC2F9',
          '200': '#E49DF6',
          '300': '#DD78F3',
          '400': '#D652EF',
          '500': '#D12DEC',
          '600': '#BC13D2',
          '700': '#950FA3',
          '800': '#6D0B75',
          '900': '#420646'
        },
      }
    }
  },
  plugins: [],
}
