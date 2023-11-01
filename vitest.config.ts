import { join } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {},
  resolve: {
    alias: {
      "@": join(__dirname, "./src/"),
    },
  },
});