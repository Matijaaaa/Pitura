<template>
  <v-container>
    <div class="mt-8 flex justify-center">
      <h1 class="text-3xl font-semibold">Odaberite vrstu boje</h1>
    </div>
    <div class="mt-8 flex justify-center">
      <v-select
        :items="vrstaBoje"
        label="Odabir boje"
        dense
        outlined
        class="inline"
        v-model="odabranaVrstaBoje"
      ></v-select>
    </div>
    <div class="mt-8 flex justify-center">
      <h1 class="text-xl font-semibold">Odaberite boju</h1>
    </div>
    <div class="mt-8 flex justify-center">
      <v-color-picker
        dot-size="25"
        swatches-max-height="200"
        v-model="odabranaBoja"
      ></v-color-picker>
    </div>
    <div class="flex justify-center mt-15">
      <button
        class="bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 rounded"
        @click.prevent="saveData"
        :disabled="!bojaJeOdabrana"
      >
        DALJE
      </button>
    </div>
  </v-container>
</template>

<script>
import Store from "../store.js";
export default {
  name: "odabir-boje",
  data() {
    return {
      vrstaBoje: [
        "Boja za metal",
        "Boja za drvo",
        "Boja za beton",
        "Boja za laminat",
        "Boja za fasadu",
        "Boja za interijer",
        "Boja za podvodnu namjenu",
        "Boja za plastiku",
        "Boja za auto",
      ],
      odabranaVrstaBoje: "",
      odabranaBoja: null,
      Store,
    };
  },
  methods: {
    saveData() {
      Store.odabranaVrstaBoje = this.odabranaVrstaBoje;
      Store.odabranaBoja = this.odabranaBoja;
      this.$router.push({ path: "/povrsina-usluge" });
    },
  },
  computed: {
    bojaJeOdabrana() {
      if (this.odabranaVrstaBoje && this.odabranaBoja) return true;
      else return false;
    },
  },
};
</script>

<style>
.inline {
  max-width: 300px;
}
</style>
