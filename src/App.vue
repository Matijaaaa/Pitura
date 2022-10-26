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
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          text
          to="/prijava"
        >
          <span class="mr-2">Prijava</span>
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

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.emai);
  } else {
    console.log("No user");
  }
});
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style></style>
