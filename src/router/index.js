import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/collections",
      name: "collections",
      component: () => import("../views/ListCollectionsView.vue"),
    },
    {
      path: "/collections/:id",
      name: "collection",
      component: () => import("../views/CollectionView.vue"),
    },
    {
      path: "/rover",
      name: "rover",
      component: () => import("../views/RoverView.vue"),
    },
    {
      path: "/rover/configure",
      name: "roverConfig",
      component: () => import("../views/RoverConfigView.vue"),
    },
  ],
});

export default router;
