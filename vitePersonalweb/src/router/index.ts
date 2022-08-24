import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect: "./Home",
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/ENG/PC/HomePage.vue"),
  },
  {
    path:"/Photograph",
    name: "Photograph",
    component: () => import("../views/ENG/PC/Photo.vue"),
  },
  {
    path:"/Student",
    name: "Student",
    component: () => import("../views/ENG/PC/CV.vue"),
  },
  {
    path:"/Programmer",
    name: "Programmer",
    component: () => import("../views/ENG/PC/Programmer.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
