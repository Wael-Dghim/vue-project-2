import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import BooksView from '../views/BooksView.vue'
import ClothingView from '../views/ClothingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView
    },
    {
      path: '/clothing',
      name: 'clothing',
      component: ClothingView
    }
  ]
})

export default router
