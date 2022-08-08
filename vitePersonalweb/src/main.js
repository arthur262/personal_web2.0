import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import VueKinesis from "vue-kinesis";
import VuePrlx from "vue-prlx";
import VueAnimateOnScroll from "./assets/vue-animate-onscroll";

createApp(App)
  .use(router)
  .use(VueAnimateOnScroll)
  .use(VueKinesis)
  .use(Antd)
  .use(VuePrlx)
  .mount("#app");
