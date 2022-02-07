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
          DEFAULT: '#BE14D9',
          '50': '#EDADF7',
          '100': '#E99AF6',
          '200': '#E175F2',
          '300': '#D950EF',
          '400': '#D12AEB',
          '500': '#BE14D9',
          '600': '#910FA6',
          '700': '#640B72',
          '800': '#37063F',
          '900': '#0A010C'
        },
      }
    }
  },
  plugins: [],
}
