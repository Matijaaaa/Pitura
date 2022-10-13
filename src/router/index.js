import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home-view.vue";
import PovrsinaUslugeView from "../views/povrsina-usluge-view.vue"
import OdabirBojeView from "../views/odabir-boje-view.vue"

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
    component: OdabirBojeView,
  },
  {
    path: "/povrsina-usluge",
    name: "povrsina-uskuge",
    component: PovrsinaUslugeView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
