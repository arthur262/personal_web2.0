import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicpath: "/",
  base: "./",
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("/src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("views", resolve("src/views"));
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
