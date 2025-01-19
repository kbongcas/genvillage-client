import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/genvillageapi": {
        target: "https://genvillagefa.azurewebsites.net",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/genvillageapi/, ""),
      },
    },
  },
  plugins: [react()],
});
