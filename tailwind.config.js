module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        hero: "85vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
