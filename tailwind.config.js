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
        // primary: "#DC5F00",
        primary: "#F73859",
        // dark: "#373A40",
        dark: "#283149",
        accent: "#DBEDF3",
        // secondary: "#686D76",
        secondary: "#404B69",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
