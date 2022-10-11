import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home-view.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/odabir-boje",
    name: "odabir-boje",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/odabir-boje-view.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
