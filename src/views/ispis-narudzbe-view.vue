<template>
  <div class="mt-8 flex justify-center">
    <h1 class="text-3xl font-semibold">Vaša narudžba</h1>
    <p>vrsta boje: {{ Store.odabranaVrstaBoje }}</p>
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
