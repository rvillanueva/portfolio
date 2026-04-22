import type { Config } from "tailwindcss";

export default {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}", "./App.css"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f7f7f5",
          100: "#eeece7",
          200: "#d9d6cd",
          300: "#b8b3a5",
          400: "#8f8a7a",
          500: "#6b6657",
          600: "#4d493d",
          700: "#36332a",
          800: "#22201a",
          900: "#14130f",
        },
        accent: {
          50: "#fef6ee",
          100: "#fde9d2",
          200: "#fbcfa0",
          300: "#f7ae64",
          400: "#f38a36",
          500: "#ee6d18",
          600: "#d8520d",
          700: "#b43d0c",
          800: "#8f3110",
          900: "#742a11",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "sans-serif",
        ],
        serif: ["Fraunces", "Merriweather", "Georgia", "serif"],
        mono: ["JetBrains Mono", "Menlo", "Monaco", "monospace"],
      },
      fontSize: {
        "display-sm": ["clamp(2rem, 4vw + 1rem, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2.5rem, 5vw + 1rem, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(3rem, 6vw + 1rem, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.035em" }],
        "hero": ["clamp(1.125rem, 0.9vw + 0.95rem, 1.5rem)", { lineHeight: "1.55" }],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
        "3xl": "28px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20, 19, 15, 0.04), 0 8px 24px rgba(20, 19, 15, 0.06)",
        lift: "0 4px 12px rgba(20, 19, 15, 0.08), 0 24px 48px rgba(20, 19, 15, 0.12)",
        ring: "0 0 0 1px rgba(20, 19, 15, 0.06)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "scroll-x": "scrollX 90s linear infinite",
        "scroll-x-reverse": "scrollXReverse 90s linear infinite",
        "float-slow": "floatSlow 18s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scrollX: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        scrollXReverse: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(3%, -4%, 0) scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
