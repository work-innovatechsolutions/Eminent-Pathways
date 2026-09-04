import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#0B132B",
            900: "#070D1E",
            800: "#0B132B",
            700: "#1C2541",
            600: "#3A506B",
          },
          gold: {
            DEFAULT: "#C5A059",
            light: "#E5C88E",
            dark: "#A37E36",
            50: "#FBF8F0",
            100: "#F5EED9",
            500: "#C5A059",
            600: "#A37E36",
          },
          blue: {
            DEFAULT: "#2563EB",
            dark: "#1D4ED8",
            light: "#3B82F6",
            50: "#EFF6FF",
          },
          emerald: {
            DEFAULT: "#059669",
            light: "#10B981",
            50: "#ECFDF5",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        premium: "0 10px 30px -10px rgba(11, 19, 43, 0.08)",
        "premium-hover": "0 20px 40px -15px rgba(11, 19, 43, 0.16)",
        gold: "0 0 25px -5px rgba(197, 160, 89, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
