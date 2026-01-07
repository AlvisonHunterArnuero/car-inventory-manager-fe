import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
    }),
  ],
  optimizeDeps: {
    include: [
      "@mui/material",
      "@emotion/react",
      "@emotion/styled",
      "@mui/material/styles",
      "@apollo/client",
    ],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    css: true,
  },
});
