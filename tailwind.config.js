module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/*.css",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#DDCEBA",
        secondary: "#E3DBD0",
        accent: "#325F79",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
