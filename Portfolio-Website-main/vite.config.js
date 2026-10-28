import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? "/Val-Photography-Portfolio/" : "/",
  server: {
    watch: {
      ignored: ["**/dist/**"],
    },
  },
}));
