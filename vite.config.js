import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          charts: ["chart.js", "react-chartjs-2"],
          animations: [
            "framer-motion",
            "react-simple-typewriter",
            "react-typed"
          ]
        }
      }
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom", "chart.js", "react-chartjs-2"]
  }
});
