const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: [
        "Roboto,sans-serif",
        ...fontFamily.sans
      ],
      roboto: [
        "Roboto"
      ],
      "roboto-serif": [
        "Roboto,sans-serif"
      ],
      "roboto-mono": [
        "Roboto Mono,monospace"
      ]
    },

  },
  plugins: [],
}
