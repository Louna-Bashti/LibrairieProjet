<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const titre = ref("");
const qtestock = ref("");
const prix = ref("");

const emit = defineEmits(["addc"]);
</script>

<template>
  <form @submit.prevent="$emit('addc', titre, qtestock, prix)">
    <h1>Enregistrer un livre</h1>
    <div>
      <input type="text" v-model="titre" placeholder="Titre ?" />
    </div>
    <div>
      <input type="text" v-model="qtestock" placeholder="Quantité ?" />
    </div>
    <div>
      <input type="text" v-model="prix" placeholder="Prix ?" />
    </div>
    <button type="submit">Ajouter</button>
  </form>
</template>

<style scoped>
</style>