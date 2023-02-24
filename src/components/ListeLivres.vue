<script setup>
// -- import de la fonction permettant de déclarer une variable comme une variable d'ETAT
import { reactive, onMounted } from "vue";
import { BACKEND } from '../api.js';

import LivreForm from "./LivreForm.vue";


// -- la liste des livres
// --> donnée réactive = l'affichage sera actualisé automatiquement à chaque cght dans la liste

const listeVide = {
  titre: "",
  qtestock: "",
  prix: ""
};

let data = reactive({
  formulaireLivre: { ...listeVide },
  listeLivres: []
});

// -- fonction pour récupérer les données de l'API
function getLivres() {
  const fetchOptions = { method: "GET" };

  fetch(BACKEND, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        data.listeLivres = dataJSON;

      })
      .catch((error) => console.log(error));
}



// -- handle pour supprimer un livre à prtir de l'index dans la liste
function supprimerLivre(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
 fetch(BACKEND + "/" + id, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getLivres();
      })
      .catch((error) => console.log(error));
}
// -- handler pour ajouter un nouveau livre à partir du titre saisi dans le formulaire qui se retrouve en paramétre
function ajouterLivre(titre, qtestock, prix) {
  if (titre.length == 0) {
    alert("Veuillez saisir un titre!");
  }
  else if (qtestock.length == 0) {
    alert("Veuillez saisir une quantité!");
  }
  else if (prix.length == 0) {
    alert("Veuillez saisir un prix!");
  } else {
    // Ajouter une catégorie avec les données du formulaire
    data.formulaireLivre = {titre, qtestock, prix};
    const options = {
      method: "POST", // Verbe HTTP POST pour ajouter un enregistrement
      body: JSON.stringify(data.formulaireLivre),
      headers: {
        "Content-Type": "application/json",
      }
    };
    fetch(BACKEND , options)
        .then((response) => {
          return response.json();
        })
        .then((dataJSON) => {
          console.log(dataJSON);
          data.listeLivres = dataJSON;
          getLivres();

        })
        .catch((error) => {
          console.log(error);
        })
    data.formulaireLivre.titre = '';
    data.formulaireLivre.qtestock = '';
    data.formulaireLivre.prix = '';
  }
}

function diminuerQuantite(idRef, titreRef, qtestockRef, prixRef) {
  let fetchOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: idRef, titre: titreRef, qtestock: qtestockRef -= 1, prix: prixRef })
  };
  fetch(BACKEND, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        if (qtestockRef <= 0) {
          supprimerLivre(idRef);
        }
        getLivres();
      })
      .catch((error) => {
        console.log(error);
      })
}

function augmenterQuantite(idRef, titreRef, qtestockRef, prixRef) {
  let fetchOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: idRef, titre: titreRef, qtestock: qtestockRef += 1, prix: prixRef })
  };
  fetch(BACKEND, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        console.log(dataJSON);
        getLivres();
      })
      .catch((error) => {
        console.log(error);
      })
}

onMounted(() => {
  getLivres();
});

</script>

<template>
  <main>
    <div>
      <img src="../assets/imagebookshelf2.jpg" width="100" height="100" alt="bookshelf">
      <LivreForm @addc="ajouterLivre"></LivreForm>
      <img src="../assets/imagebookshelf2.jpg" width="100" height="100" alt="bookshelf">
    </div>
    <div>
      <table>
        <caption>La bibliothèque</caption>
        <tr>
          <th>Identifiant</th>
          <th>Titre</th>
          <th>Quantité en stock</th>
          <th>Prix</th>
        </tr>
        <!-- tableau vide -->
        <tr v-if="!data.listeLivres">
          <td colspan="4">Veuillez patienter, chargement des livres...</td>
        </tr>
        <!-- Si le tableau des catégories n'est pas vide -->
        <tr v-for="livre in data.listeLivres" :key="livre.id">
          <td>{{ livre.id }}</td>
          <td>{{ livre.titre }}</td>
          <td>
            <button @click="diminuerQuantite(livre.id, livre.titre, livre.qtestock, livre.prix)">-</button>
            {{ livre.qtestock }}
            <button @click="augmenterQuantite(livre.id, livre.titre, livre.qtestock, livre.prix)">+</button>
          </td>
          <td>{{livre.prix}}</td>
          <td>
            <button @click="supprimerLivre(livre.id)">
              Supprimer
            </button>
          </td>
        </tr>
      </table>
    </div>
  </main>
</template>

<style scoped>

div {
  padding: 20px;
  display: inline-flex;
  align-content: center;
}

th, tr, td{
  border: 2px solid black;
  background: #2d1e01;
  text-align: center;
  padding: 12px;

}

th{
  font-family: "Baskerville Old Face";
  font:bold;
  font-size: larger;
}

caption {
  font-family: "Baskerville Old Face";
  font-weight: bolder;
  font-size: xxx-large;
}

button{
  background-color: cornsilk;
}

button:hover{
  cursor: pointer;
  background-color: white;
}

img{
  padding: 20px;
}

</style>

