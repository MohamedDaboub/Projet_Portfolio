import { createRouter, createWebHistory } from 'vue-router'

import MentionslegalesView from '../views/MentionslegalesView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },

    { path: '/Mentionslegales', name: 'MentionslegalesView', component: MentionslegalesView },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return savedPosition || { top: 0 }
  },
})

export default router
