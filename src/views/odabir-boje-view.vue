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
      <v-btn
        class=""
        :disabled="!bojaJeOdabrana"
        elevation="2"
        x-large
        color="purple"
        to="/povrsina-usluge"
      >
        dalje</v-btn
      >
    </div>
  </v-container>
</template>

<script>
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
    };
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
