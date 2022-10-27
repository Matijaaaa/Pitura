<template>
  <div>
    <div class="mt-8 flex justify-center">
      <h1 class="text-2xl font-semibold">Vaša narudžba</h1>
    </div>
    <div class="mt-6 flex justify-center">
      <p><v-icon x-large>mdi-dolly</v-icon></p>
    </div>
    <div class="flex justify-center">
      <p>{{ Store.ime }}</p>
    </div>
    <div class="flex justify-center">
      <p>{{ Store.adresa }}</p>
    </div>
    <div class="flex justify-center">
      <p>{{ Store.brojtelefona }}</p>
    </div>
    <div class="flex justify-center">
      <p>{{ Store.currentUser }}</p>
    </div>
    <div class="flex justify-center">
      <v-sheet
        color="yellow darken-1"
        elevation="2"
        height="450"
        width="400"
        class="pr-8 pl-8 pt-2 pb-2 text-xl"
      >
        <p>Odabrana boja:</p>
        <v-color-picker
          disabled
          dot-size="25"
          hide-canvas
          hide-inputs
          swatches-max-height="200"
          :value="Store.odabranaBoja"
        ></v-color-picker>
        <p>Vrsta boje: {{ Store.odabranaVrstaBoje }}</p>
        <p>Unesena povrsina: {{ Store.unesenaPovrsina }}m2</p>
        <p>Količina: {{ Store.litreBoje }}L</p>
        <p>Skela: {{ Store.skela ? "DA" : "NE" }}</p>
        <p>Usluge farbanja: {{ Store.uslugeFarbanja ? "DA" : "NE" }}</p>
        <p>Premium boja: {{ Store.premiumBoja ? "DA" : "NE" }}</p>
        <p>Čišćenje: {{ Store.ciscenje ? "DA" : "NE" }}</p>
      </v-sheet>
    </div>
    <div class="mt-8 flex justify-center">
      <h1 class="text-xl font-semibold">
        Plaćanje se vrši pri preuzimanju robe
      </h1>
    </div>
    <div class="mt-6 mb-6 flex justify-center">
      <v-btn class="py-8" elevation="2" x-large rounded color="yellow" to="/">
        <v-icon>mdi-check</v-icon>
        Završi narudžbu</v-btn
      >
    </div>
  </div>
</template>

<script>
import Store from "../store.js";
export default {
  name: "finish-view",
  data() {
    return {
      Store,
    };
  },
};
</script>

<style></style>
