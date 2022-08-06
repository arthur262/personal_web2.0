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
    component: () => import("../views/PC/HomePage.vue"),
  },
  {
    path: "/Home_M",
    name: "Home_Mobile",
    component: () => import("../views/Mobile/HomePage.vue"),
  },
  {
    path:"/Photograph",
    name: "Photograph",
    component: () => import("../views/PC/Photo.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
