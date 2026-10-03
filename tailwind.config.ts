import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "text-primary": "rgb(var(--color-text-primary) / <alpha-value>)",
        "text-secondary": "rgb(var(--color-text-secondary) / <alpha-value>)",
      },
      letterSpacing: {
        editorial: "0.18em",
      },
      fontFamily: {
        sans: ["var(--font-yekan)", "Tahoma", "Arial", "sans-serif"],
        display: ["var(--font-yekan)", "Tahoma", "Arial", "sans-serif"],
        yekan: ["var(--font-yekan)", "Tahoma", "Arial", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 24px 80px rgba(0, 0, 0, 0.32)",
      },
    },
  },
  plugins: [],
};

export default config;
