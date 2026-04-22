import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

const port = Number(process.env.PORT) || 3000;

export default defineConfig({
  publicDir: "src/public",
  server: { port },
  preview: { port },
  plugins: [
    tanstackStart({
      pages: [
        { path: "/", prerender: { enabled: true } },
        { path: "/contact", prerender: { enabled: true } },
      ],
    }),
    viteReact(),
  ],
});
