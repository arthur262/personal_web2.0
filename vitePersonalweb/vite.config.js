import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicpath: "/",
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, "./src"),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import"./src/assets/css/global.css"',
      },
    },
  },
});
