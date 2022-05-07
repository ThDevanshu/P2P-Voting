module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      spacing: {
        128: "32rem",
      },
      rotate: {
        40: "40deg",
      },
    },
  },
  plugins: [],
};
