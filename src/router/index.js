import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeComponent

  },
  {
    path: '/pedidos',
    name: 'Pedidos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedidos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router