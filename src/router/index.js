import { createRouter, createWebHistory } from 'vue-router'

import AboutMe from '../views/AboutMe.vue'
import ContactMe from '../views/ContactMe.vue'
import MyExperience from '../views/MyExperience.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/MyExperience',
      name: 'MyExperience',
      component: MyExperience
    }, {
      path: '/ContactMe',
      name: 'ContactMe',
      component: ContactMe
    },
  ]
})

export default router
