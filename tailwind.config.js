/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#DC5F00",
        dark: "#373A40",
        secondary: "#686D76",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
