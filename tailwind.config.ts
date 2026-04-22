import type { Config } from "tailwindcss";

export default {
  content: ["./src/index.html", "./src/**/*.{js,ts,jsx,tsx}", "./App.css"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
