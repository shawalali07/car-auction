import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E11A22",
          light: "#EF746D",
          hover: "#db5a5f",
          ["light-hover"]: "#de817c",
        },
        secondary: {
          DEFAULT: "#7F808E",
          light: "#D7D6D2",
          hover: colors.neutral[300],
          border: "#27272A",
          text: colors.neutral[500],
          dark: colors.neutral[800],
          ["light-hover"]: colors.neutral[600],
          ["dark-hover"]: colors.neutral[900],
        },
        red: {},
        gray: {
          900: "#14191C",
        },
        "primary-gradient": { a: "#2F3033", b: "#161B1E", c: "#2F3033" },
      },
      fontFamily: {
        customFont: ["Helvetica", "sans-serif"],
      },
      transitionDuration: {
        500: "0.5s",
      },
      transitionTimingFunction: {
        "in-out": "ease-in-out",
      },
    },
  },
  plugins: [],
};
