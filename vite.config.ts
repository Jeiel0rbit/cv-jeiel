import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://github.com/Jeiel0rbit/jeiel-lima-miranda/",
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
});
