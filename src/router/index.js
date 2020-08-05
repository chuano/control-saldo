import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import CreditHistory from '../views/CreditHistory.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/credit-history',
    name: 'CreditHistory',
    component: CreditHistory,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
