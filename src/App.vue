<template>
  <!--Pozadina-->
  <v-app style="background-color: #b2ebf2">
    <!--Header-->
    <v-app-bar app dark class="cyan" height="70">
      <div class="flex justify-center mt-4 ml-24">
        <router-link to="/">
          <v-icon size="70" color="yellow">mdi-format-color-fill</v-icon>
        </router-link>
      </div>
      <div class="float-right">
        <v-btn
          v-if="!store.currentUser"
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          text
          to="/prijava"
        >
          <span class="mr-2">Prijava</span>
        </v-btn>
      </div>
      <div class="float-right">
        <v-btn
          v-if="store.currentUser"
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          @click="logout()"
          text
          to="/prijava"
        >
          <span class="mr-2">Odjava</span>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { firebase } from "./views/firebase.js";
import store from "./store.js";
import router from "./router";

firebase.auth().onAuthStateChanged((user) => {
  const currentRoute = router.currentRoute;
  if (user) {
    console.log(user.email);
    store.currentUser = user.email;

    if (!currentRoute.meta.needsUser) {
      router.push({ name: "home" });
    }
  } else {
    console.log("No user");
    store.currentUser = null;

    if (currentRoute.meta.needsUser) {
      router.push({ name: "prijava" });
    }
  }
});
export default {
  name: "App",

  data() {
    return {
      store,
    };
  },
  //() => ({
  //
  //}),
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "prijava" });
        });
    },
  },
};
</script>
<style></style>
