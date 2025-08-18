import { createWebHistory , createRouter } from 'vue-router'

import HomeView from '../Views/HomeView.vue'
import AboutView from '../Views/AboutView.vue'
import ProjectsView from '@/Views/ProjectsView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/projects', component: ProjectsView },
]

const router = createRouter({
  history: createWebHistory (),
  routes,
})

export default router