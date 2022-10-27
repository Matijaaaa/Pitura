<template>
  <div>
    <div class="mt-8 flex justify-center">
      <h1 class="text-2xl font-semibold">Podaci</h1>
    </div>
    <div class="mt-8 flex justify-center">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          label="Ime i prezime"
          required
        ></v-text-field>

        <v-text-field
          v-model="brojTelefona"
          label="Broj telefona"
          required
        ></v-text-field>

        <v-radio-group v-model="radioGroup" mandatory>
          <v-radio label="1. Osobno preuzimanje" value="false"></v-radio>
          <v-radio label="2. Dostava" value="true"></v-radio>
        </v-radio-group>

        <v-text-field
          v-if="radioGroup == 'true'"
          label="Unesite adresu"
          hide-details="auto"
          class="inline"
          v-model="unesenaAdresa"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4 mt-6"
          @click="validate"
        >
          Naruči!
        </v-btn>

        <v-btn color="error" class="mr-4 mt-6" @click="reset"> Reset</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "podaci-View",
  data() {
    return {
      store,
      brojTelefona: "",
      radioGroup: false,
      unesenaAdresa: "",
      valid: true,
      name: "",
      nameRules: [(v) => !!v || "Ime i prezime je potrebno"],
    };
  },
  methods: {
    validate() {
      let Validation = this.$refs.form.validate();
      console.log(Validation);
      if (Validation) this.$router.replace({ name: "finish" });
      store.adresa = this.unesenaAdresa;
      store.brojtelefona = this.brojTelefona;
      store.ime = this.name;
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
.inline {
  max-width: 300px;
}
</style>
