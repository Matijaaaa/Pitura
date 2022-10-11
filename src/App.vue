<template>
  <!--Pozadina-->
  <v-app style="background-color: #b2ebf2">
    <!--Header-->
    <v-app-bar app dark class="cyan" height="70">
      <div class="flex justify-center mt-4">
        <router-link to="/">
          <v-icon size="70" color="yellow">mdi-format-color-fill</v-icon>
        </router-link>
      </div>
      <!--
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text>
        <span class="mr-2">Latest Release</span>
        <v-icon color="red">mdi-format-color-fill</v-icon>
      </v-btn>
      -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style></style>
