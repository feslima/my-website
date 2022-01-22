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
      }
    }
  },
  plugins: [],
}
