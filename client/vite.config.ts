import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ include: ["**/*.tsx", "**/*.ts"] },)],
  build: {
    outDir: "../server/public",
    emptyOutDir: true,
  },
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@styles": path.resolve(__dirname, "src", "styles"),
      "@components": path.resolve(__dirname, "src", "components"),
      "@utils": path.resolve(__dirname, "src", "utils"),
      "@lib": path.resolve(__dirname, "src", "lib"),
      "@assets": path.resolve(__dirname, "src", "assets"),
      "@data": path.resolve(__dirname, "src", "data"),
    },
  },

})
