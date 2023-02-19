<template>
<div>
  <form @submit.prevent="rechercheLivre">
    <div>
      <label for="titre">Entrer un titre de livre</label>
      <br />
      <input v-model="data.motcle" placeholder="Rechercher">
    </div>
  </form>
</div>
  <br />
  <div>
    <table>
      <caption>Résultat de la recherche :</caption>
      <tr>
        <th>Code</th>
        <th>Titre</th>
        <th>En stock</th>
        <th>prix</th>
      </tr>
      <tr v-for="livre in data.listeLivres" :key="livre.id">
        <td>{{livre.id}}</td>
        <td>{{livre.titre}}</td>
        <td>{{livre.qtestock}}</td>
        <td>{{livre.prix}}</td>
      </tr>
    </table>
  </div>

</template>

<script setup>
import { reactive, onMounted } from "vue";
import { BACKEND } from '../api.js';

const listeVide = {
  titre: "",
  qtestock: "",
  prix: ""
};

let data = reactive({
  formulaireLivre: { ...listeVide },
  listeLivres: [],
  motcle: ""
});


function rechercheLivre() {
  let fetchOptions = {
    "method": "GET"
  };
  fetch(BACKEND + "?search=" + data.motcle, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        data.listeLivres = dataJSON;
        if (data.motcle.length == 0) {
          alert("Saisissez un titre de livre ou un mot-clé dans la barre de recherche");
        }
        data.motcle = '';
      })
      .catch((error) => {
        console.log(error);
      })
}
</script>

<style scoped>

</style>