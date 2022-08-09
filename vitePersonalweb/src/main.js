import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VueKinesis from "vue-kinesis";
import VueAnimateOnScroll from "./assets/vue-animate-onscroll";

createApp(App)
  .use(router)
  .use(VueAnimateOnScroll)
  .use(VueKinesis)
  .use(Antd)
  .mount("#app");
