<script setup>
// ==> ne pas oublier "setup" pour l'API composition
// -- importer les composants utilisés
import { RouterLink, RouterView } from 'vue-router';
import LibrairieHeader from "./components/LibrairieHeader.vue";
import ListeLivres from "@/components/ListeLivres.vue";

</script>

<template>
  <LibrairieHeader />
  <br />
  <nav>
    <RouterLink class="nav" to ="/accueil">Accueil</RouterLink>
    <RouterLink class="nav" to ="/listelivres">Nos livres</RouterLink>
    <RouterLink class="nav" to ="/recherche">Chercher un livre</RouterLink>
  </nav>
  <br />
  <RouterView></RouterView>

</template>

<style>
</style>
