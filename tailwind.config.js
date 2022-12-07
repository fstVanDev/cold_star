/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "#FAFAFA",
        secondary: "#EEEEEE",
        white: "#FFFFFF",
        green: "#21C3A4",
        lightGreen: "#C6F5EC",
        yellow: "#F3ECC5",
        orange: "#F26419",

        violet: "#C3C6F2",
      },
      fontWeight: {
        bold: 700,
        normal: 400,
      },
      textColor: {
        black: "#1F1F1F",
        gray: "#484848",
        lightGray: "#808080",
        white: "#FFFFFF",
        orange: "#F26419",
        green: "#21C3A4",
      },
      borderColor: {
        gray: "#EEEEEE",
        green: "#21C3A4",
        orange: "#F26419",
      },
      borderRadius: {
        4: "4px",
        6: "6px",
        10: "10px",
        15: "15px",
        20: "20px",
        30: "30px",
      },
      fontSize: {
        12: "12px",
        14: "14px",
        18: "18px",
        24: "24px",
        32: "32px",
        42: "42px",
      },
      lineHeight: {
        17: "17px",
        20: "20px",
        22: "22px",
        24: "24px",
        30: "30px",
        40: "40px",
        52: "52px",
      },
      fontFamily: {
        main: ["IBM Plex Sans", "sans-serif"],
      },
      screens: {
        sm: { min: "375px", max: "479px" },
        md: { min: "480px", max: "767px" },
        lg: { min: "768px", max: "1023px" },
        xl: { min: "1024px", max: "1289px" },
        "2xl": { min: "1290px" },
      },
    },
  },
  plugins: [],
};
