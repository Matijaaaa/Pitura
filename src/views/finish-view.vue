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
    <div class="mt-6 mb-2 flex justify-center">
      <button
        class="bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 rounded"
        @click.prevent="dodajNarudzbu"
      >
        Završi narudžbu!
      </button>
    </div>
    <div class="mb-12 flex justify-center">
      <v-alert v-if="finish" dense text type="success">
        Narudžba uspješno zaprimljena!
      </v-alert>
    </div>
  </div>
</template>

<script>
import { DB } from "./firebase";

import Store from "../store.js";
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
export default {
  name: "finish-view",
  data() {
    return {
      Store,
      finish: false,
    };
  },
  methods: {
    async dodajNarudzbu() {
      DB.collection("narudžbe").add({
        ime: Store.ime,
        email: Store.currentUser,
        adresa: Store.adresa,
        brojtelefona: Store.brojtelefona,
        narudžba: {
          odabranaBoja: Store.odabranaBoja,
          odabranaVrstaBoje: Store.odabranaVrstaBoje,
          unesenaPovrsina: Store.unesenaPovrsina,
          litreBoje: Store.litreBoje,
          skela: Store.skela,
          uslugeFarbanja: Store.uslugeFarbanja,
          premiumBoja: Store.premiumBoja,
          ciscenje: Store.ciscenje,
        },
      });
      console.log("Narudzba dodana");
      this.finish = true;
      await delay(3000);
      this.$router.replace({ name: "home" });
    },
  },
};
</script>

<style></style>
