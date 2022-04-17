module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx,css}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F55353",
        primaryDark: "#EA5455",
        secondary: "#EEEEEE",
        default: "#FFFFFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
