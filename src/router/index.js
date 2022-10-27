import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home-view.vue";
import PovrsinaUslugeView from "../views/povrsina-usluge-view.vue";
import OdabirBojeView from "../views/odabir-boje-view.vue";
import IspisNarudzbeView from "..//views/ispis-narudzbe-view.vue";
import PrijavaView from "..//views/prijava-view.vue";
import RegistracijaView from "..//views/registracija-view.vue";
import store from "@/store";
import PodaciView from "..//views/podaci-view.vue";
import FinishView from "..//views/finish-view.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      needsUser: true,
    },
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
  {
    path: "/ispis-narudzbe",
    name: "ispis-narudzbe",
    component: IspisNarudzbeView,
  },
  {
    path: "/prijava",
    name: "prijava",
    component: PrijavaView,
  },
  {
    path: "/registracija",
    name: "registracija",
    component: RegistracijaView,
  },
  {
    path: "/podaci",
    name: "podaci",
    component: PodaciView,
  },
  {
    path: "/finish",
    name: "finish",
    component: FinishView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(
    "Stara ruta ",
    from.name,
    " -> ",
    to.name,
    "Korisnik",
    store.currentUser
  );
  const noUser = store.currentUser === null;
  console.log(noUser);
  if (noUser && to.meta.needsUser) {
    next("prijava");
  } else {
    next();
  }
});

export default router;
