import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

// Projet
import Aidealareussite from '../views/Contenu/Projet/AidealareussiteView.vue'
import TiKTak from '../views/Contenu/Projet/TiKTakView.vue'
import RapFeast from '../views/Contenu/Projet/RapFeastView.vue'
import ExpositionUniverselle from '../views/Contenu/Projet/ExpositionUniverselleView.vue'
import Chartegraphique from '../views/Contenu/Projet/ChartegraphiqueView.vue'
import LogoPersonnel from '../views/Contenu/Projet/LogoPersonnelView.vue' 
import PMBPlast from "../views/Contenu/Projet/PMBPlastView.vue"

// Page Statique
import MentionslegalesView from '../views/MentionslegalesView.vue'
import page404 from '../views/404View.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },

    // Projet
    { path: '/Aidealareussite', name: 'Aidealareussite', component: Aidealareussite },
    { path: '/TiKTak', name: 'TiKTak', component: TiKTak },
    { path: '/RapFeast', name: 'RapFeast', component: RapFeast },
    { path: '/ExpositionUniverselle', name: 'ExpositionUniverselle', component: ExpositionUniverselle },
    { path: '/Chartegraphique', name: 'Chartegraphique', component: Chartegraphique },
    { path: '/LogoPersonnel', name: 'LogoPersonnel', component: LogoPersonnel },
    { path: '/PMBPlast', name: 'PMBPlast', component: PMBPlast },

    // Page Statique
    { path: '/Mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/:pathMatch(.*)*', name: 'page404', component: page404 },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return savedPosition || { top: 0 }
  },
})

export default router
