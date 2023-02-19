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

<style scoped>

html,body {
  background: peru;
}

.nav {
  justify-content: center;
  padding-inline: 50px;
  padding-inline-start: 50px;
  padding-inline-end: 50px;
  margin: auto;
  display: inline-flex;
  color: #9e6000;
  background: #2d1e01;
  border-width: 5px;
}

.nav:hover{
  color: #ffe4c4;
  background: darkgoldenrod;
}

</style>
