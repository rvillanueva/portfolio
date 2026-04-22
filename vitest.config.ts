/// <reference types="vitest" />
/// <reference types="vitest/globals" />

import { defineConfig } from "vitest/config";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.output/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/e2e/**",
      "**/build/**",
    ],
  },
});
