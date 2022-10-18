<template>
  <div>
    <div class="mt-8 flex justify-center">
      <h1 class="text-2xl font-semibold">Unesite površinu (u m2)</h1>
    </div>
    <div class="mt-8 flex justify-center">
      <v-text-field
        label="Unesite površinu"
        hide-details="auto"
        class="inline"
        v-model="unesenaPovrsina"
      ></v-text-field>
    </div>
    <div class="mt-8 flex justify-center">
      <h1 class="text-2xl font-semibold">
        Potrebno vam je: {{ Math.round(this.izracunLitara * 100) / 100 }} L
      </h1>
    </div>
    <div class="mt-8 flex justify-center">
      <p>Potrošnja cca 175 ml/m²</p>
    </div>
    <div class="mt-8 flex justify-center">
      <h1 class="text-2xl font-semibold">Odaberite potrebne usluge</h1>
    </div>
    <div class="flex justify-center">
      <v-checkbox
        v-model="skela"
        label="Skela"
        color="yellow darken-2"
        hide-details
      ></v-checkbox>
    </div>
    <div class="flex justify-center">
      <v-checkbox
        v-model="uslugeFarbanja"
        label="Usluge farbanja"
        color="yellow darken-2"
        hide-details
      ></v-checkbox>
    </div>
    <div class="flex justify-center">
      <v-checkbox
        v-model="premiumBoja"
        label="Premium boja"
        color="yellow darken-2"
        hide-details
      ></v-checkbox>
    </div>
    <div class="flex justify-center">
      <v-checkbox
        v-model="ciscenje"
        label="Čišćenje"
        color="yellow darken-2"
        hide-details
      ></v-checkbox>
    </div>
    <div class="mt-8 flex justify-center">
      <button
        class="bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 rounded"
        @click.prevent="saveData"
        :disabled="!izracunLitara"
      >
        DALJE
      </button>
    </div>
  </div>
</template>

<script>
import Store from "../store.js";
export default {
  name: "povrsina-usluge",
  data() {
    return {
      unesenaPovrsina: 0,
      skela: null,
      uslugeFarbanja: null,
      premiumBoja: null,
      ciscenje: null,
      Store,
    };
  },
  methods: {
    saveData() {
      Store.unesenaPovrsina = this.unesenaPovrsina;
      Store.skela = this.skela;
      Store.uslugeFarbanja = this.uslugeFarbanja;
      Store.premiumBoja = this.premiumBoja;
      Store.ciscenje = this.ciscenje;
      Store.litreBoje = Math.round(this.izracunLitara * 100) / 100;
      this.$router.push({ path: "/ispis-narudzbe" });
    },
  },
  computed: {
    izracunLitara() {
      return this.unesenaPovrsina * 0.175;
    },
    provjera() {
      return this.unesenaPovrsina >= 0;
    },
  },
};
</script>

<style>
.inline {
  max-width: 300px;
}
</style>
