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
          50: "#f0f4fa",
          100: "#dce5f3",
          200: "#b8c9e6",
          300: "#8ea8d5",
          400: "#6586c2",
          500: "#4568ab",
          600: "#2d488d",
          700: "#253c76",
          800: "#1d305f",
          900: "#162549",
          950: "#0e1830",
          DEFAULT: "#2d488d",
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
