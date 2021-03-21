module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#157A6E",
        secondary: "#499F68",
        neutral: "#C2C5BB",
        accent: "#B4654A",
      },
      backgroundColor: theme => ({
        ...theme("colors"),
      }),
      minHeight: {
        "screen/2": "50vh",
        "screen3/4": "75vh",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
