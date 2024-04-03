import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
  base: "/app/",
  plugins: [react()],
});
