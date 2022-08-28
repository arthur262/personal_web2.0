import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "/Home_EN",
  },

  //English
  {
    path: "/Home_EN",
    name: "Home_E",
    component: () => import("../views/ENG/PC/HomePage.vue"),
  },
  {
    path:"/Photograph_EN",
    name: "Photograph_E",
    component: () => import("../views/ENG/PC/Photo.vue"),
  },
  {
    path:"/Student_EN",
    name: "Student_E",
    component: () => import("../views/ENG/PC/CV.vue"),
  },
  {
    path:"/Programmer_EN",
    name: "Programmer_E",
    component: () => import("../views/ENG/PC/Programmer.vue"),
  },


  //中文
  {
    path: "/Home_CN",
    name: "Home_C",
    component: () => import("../views/CN/PC/HomePage.vue"),
  },
  {
    path:"/Photograph_CN",
    name: "Photograph_C",
    component: () => import("../views/CN/PC/Photo.vue"),
  },
  {
    path:"/Student_CN",
    name: "Student_C",
    component: () => import("../views/CN/PC/CV.vue"),
  },
  {
    path:"/Programmer_CN",
    name: "Programmer_C",
    component: () => import("../views/CN/PC/Programmer.vue"),
  },
  {
    path: "/Music_CN",
    name: "MUsic_C",
    component: () => import("../views/CN/PC/Music.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
