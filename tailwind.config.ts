import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f0fd",
          100: "#dddcf8",
          200: "#b5b2f0",
          300: "#8e89e5",
          400: "#6b64d9",
          500: "#4d45cc",
          600: "#3830b3",
          700: "#2d2699",
          800: "#221D80",
          900: "#1a1660",
          950: "#110e40",
          DEFAULT: "#221D80",
        },
        accent: {
          50: "#fdf6e8",
          100: "#fbecd0",
          200: "#f7d5a6",
          300: "#f2be80",
          400: "#eda85e",
          500: "#e8933e",
          600: "#E37D22",
          700: "#c06419",
          800: "#9c5013",
          900: "#7a3e0d",
          DEFAULT: "#E37D22",
        },
        success: {
          50: "#f6fbe8",
          100: "#ecf6d4",
          200: "#d4eba5",
          300: "#b8de6e",
          400: "#a1d142",
          500: "#9ace3a",
          600: "#89BE1D",
          DEFAULT: "#89BE1D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
