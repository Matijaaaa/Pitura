<template>
  <div>
    <div class="mt-8 flex justify-center">
      <h1 class="text-2xl font-semibold">Prijava korisnika</h1>
    </div>
    <div class="mt-8 flex justify-center">
      <v-text-field
        class="inline"
        label="E-mail"
        :rules="rules"
        hide-details="auto"
      ></v-text-field>
    </div>
    <div class="mt-8 flex justify-center">
      <v-text-field
        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[passwordRules.required, passwordRules.min]"
        :type="show3 ? 'text' : 'password'"
        name="input-10-2"
        label="Lozinka"
        hint="Najmanje 8 znakova"
        class="input-group--focused inline"
        @click:append="show3 = !show3"
      ></v-text-field>
    </div>
    <div class="mt-8 flex justify-center">
      <button
        class="bg-purple-700 hover:bg-purple-500 text-white py-2 px-4 rounded"
        @click.prevent="saveData"
        :disabled="!izracunLitara"
      >
        Prijava
      </button>
    </div>
    <div class="mt-8 flex justify-center">
      <p>Nemaš račun? <a href="/prijava">Registriraj se!</a></p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [
      (value) => !!value || "Obavezno",
      (value) => (value && value.length >= 7) || "Minimalno 7 znakova",
      (value) => value.includes("@") || "Mora sadržavati @",
    ],
    show1: false,
    show3: false,
    password: "Password",
    passwordRules: {
      required: (value) => !!value || "Required.",
      min: (v) => v.length >= 8 || "Min 8 characters",
      emailMatch: () => `The email and password you entered don't match`,
    },
  }),
};
</script>

<style>
.inline {
  max-width: 300px;
}
</style>
