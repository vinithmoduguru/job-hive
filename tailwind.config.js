/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins", '"Open Sans"', '"sans-serif"'],
      body: ["Poppins", '"Open Sans"', '"sans-serif"'],
    },
    extend: {
      colors: {
        primary: "#1597E4",
        dark: "#212121",
        light: "#7A7A7A",
        error: "#D86161",
        // border: "#E6E6E6",
        // white: "#FAFAFA",
      },
    },
  },
  plugins: [],
}
