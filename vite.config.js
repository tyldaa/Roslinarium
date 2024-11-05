import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const path = "src";

/**
 * Don't change those lines below
 */
export default defineConfig({
  root: path,
  server: {
    port: 3000,
  },
  plugins: [react()],
});
