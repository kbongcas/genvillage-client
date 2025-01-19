import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/genvillage": {
        target: "https://genvillagefa.azurewebsites.net",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react()],
});
