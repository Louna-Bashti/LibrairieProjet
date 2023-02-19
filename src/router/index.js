import { createRouter, createWebHistory } from 'vue-router'
import ListeLivres from "../components/ListeLivres.vue";
import RechercheLivres from "../components/RechercheLivres.vue";
import Accueil from "../components/Accueil.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/accueil',
            name: 'accueil',
            component: Accueil
        },
        {
            path: '/listelivres',
            name: 'listelivres',
            component: ListeLivres
        },
        {
            path: '/recherche',
            name: 'recherche',
            component: RechercheLivres
        },
    ]
})

export default router