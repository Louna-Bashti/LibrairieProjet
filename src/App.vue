<script setup>
// ==> ne pas oublier "setup" pour l'API composition
// -- importer les composants utilisés
import { RouterLink, RouterView } from 'vue-router';
import LibrairieHeader from "./components/LibrairieHeader.vue";
import ListeLivres from "@/components/ListeLivres.vue";

</script>

<template>
  <div>
  <LibrairieHeader />
  </div>
  <br />
  <div>
  <nav>
    <RouterLink class="nav" to ="/accueil">Accueil</RouterLink>
    <RouterLink class="nav" to ="/listelivres">Nos livres</RouterLink>
    <RouterLink class="nav" to ="/recherche">Chercher un livre</RouterLink>
  </nav>
  <br />
  <RouterView></RouterView>
  </div>
</template>

<style scoped>

html,body,template {
  background: peru;
  text-align: center;
}

.nav {
  text-align: center;
  padding-inline: 60px;
  padding-inline-start: 60px;
  padding-inline-end: 60px;
  display: inline-flex;
  color: #9e6000;
  background: #2d1e01;
  border-width: 10px;
}

.nav:hover{
  color: #ffe4c4;
  background: darkgoldenrod;
}

</style>
