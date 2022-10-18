<template>
  <div>
    <div class="mt-8 flex justify-center">
      <h1 class="text-3xl font-semibold">Vaša narudžba</h1>
    </div>
    <div class="mt-8 flex justify-center">
      <v-sheet color="teal" elevation="2" height="380" width="270">
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
        <p>Ciscenje: {{ Store.ciscenje ? "DA" : "NE" }}</p>
      </v-sheet>
    </div>
    <div class="mt-8 flex justify-center">
      <h1 class="text-xl font-semibold">
        U slučaju odabira dodatnih usluga kontaktirat će Vas službena osoba
      </h1>
    </div>
    <div class="mt-8 flex justify-center">
      <button
        class="bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 rounded"
      >
        DALJE
      </button>
    </div>
  </div>
</template>

<script>
import Store from "../store.js";
export default {
  name: "ispis-narudzbe",
  data() {
    return {
      Store,
    };
  },
};
</script>

<style></style>
