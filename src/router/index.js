import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import PhotoView from '../views/PhotoView.vue'
import FilmView from '../views/FilmView.vue'
import CommercialView from '../views/CommercialView.vue'
import MessageSentView from '../views/MessageSentView.vue'

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
    path: '/photo',
    name: 'photo',
    component: PhotoView
  },
  {
    path: '/photo/commercial',
    name: 'commercial',
    component: CommercialView
  },
  {
    path: '/film',
    name: 'film',
    component: FilmView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/contact/success',
    name: 'MessageSentView',
    component: MessageSentView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
