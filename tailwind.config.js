/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      red: "#ff4da6",
      pink:"#4d0026",
      lavender:"#E6E6FA",
      plum:"#DDA0DD",
      brown:"#8A496B",
      darkseagreen: "#8fbc8f",
      aliceblue: "#f0f8ff",
      cadetblue: "#5f9ea0",
      orange: "FFC9B4",
      periwinkle:"#CCCCFF",
      royalblue:"#87CEEB",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Merriweather", "serif"],
      cursive: ["Luckiest Guy", "cursive"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
