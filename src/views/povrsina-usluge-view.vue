<template>
  <div>
    <div class="mt-8 flex justify-center">
      <h1 class="text-2xl font-semibold">Unesite površinu (u m2)</h1>
    </div>
    <div class="mt-8 flex justify-center">
      <v-text-field
        label="Unesite površinu"
        :rules="rules"
        hide-details="auto"
        class="inline"
        v-model="unesenaPovrsina"
      ></v-text-field>
    </div>
    <div class="mt-8 flex justify-center">
      <h1 class="text-2xl font-semibold">
        Potrebno vam je: {{ izracunLitara }} L
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
      <v-btn
        :disabled="!unesenaPovrsina"
        class=""
        elevation="2"
        x-large
        color="purple"
        to="/povrsina-usluge"
      >
        dalje</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "povrsina-usluge",
  data() {
    return {
      unesenaPovrsina: 0,
      skela: null,
      uslugeFarbanja: null,
      premiumBoja: null,
      ciscenje: null,
    };
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
