const { fontFamily } = require('tailwindcss/defaultTheme');

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

  },
  plugins: [],
}
