import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import MentionslegalesView from '../views/MentionslegalesView.vue'
import page404 from '../views/404View.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomeView', component: HomeView },

    { path: '/Mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView },
    { path: '/:pathMatch(.*)*', name: 'page404', component: page404 },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return savedPosition || { top: 0 }
  },
})

export default router
