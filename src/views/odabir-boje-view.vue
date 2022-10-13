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
        ></v-select>
    </div>
    <div class="mt-8 flex justify-center">
      <h1 class="text-xl font-semibold">Odaberite boju</h1>
    </div>
    <div class="mt-8 flex justify-center">
      <v-color-picker
        dot-size="25"
        swatches-max-height="200"
      ></v-color-picker>
  
    </div>
</v-container>
</template>

<script>
export default {
  name: "odabir-boje",
  data(){
    return{
      vrstaBoje: [
        "Boja za metal",
        "Boja za drvo",
        "Boja za beton",
        "Boja za laminat",
        "Boja za fasadu",
        "Boja za interijer",
        "Boja za podvodnu namjenu",
        "Boja za plastiku",
        "Boja za auto"
      ],
      
    }   
  }
};

</script>

<style>
.inline {
    max-width: 300px;
}
</style>
