import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import CommercialView from '../views/CommercialView.vue'
import FilmView from '../views/FilmView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LandingPage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/commercial',
    name: 'commercial',
    component: CommercialView
  },
  {
    path: '/film',
    name: 'film',
    component: FilmView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
