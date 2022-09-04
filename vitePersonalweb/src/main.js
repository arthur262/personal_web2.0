import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VueKinesis from "vue-kinesis";
import { MotionPlugin } from "@vueuse/motion";
import "./assets/css/global.css";




createApp(App)
  .use(router)
  .use(VueKinesis)
  .use(Antd)
  .use(MotionPlugin)
  .mount("#app");
