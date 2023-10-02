/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,jpg}"],
  theme: {
    extend: {
      colors: {
        primary: "#2079A6",
        secondary: "#1E90FF",
      },
      fontSize: {
        header: "38px",
        normal: "18px",
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
