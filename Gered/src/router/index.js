import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/missie',
    name: 'missie',
    component: () => import('../views/Missie.vue')
  }, 
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  }, 
  {
    path: '/partners',
    name: 'partners',
    component: () => import('../views/Partners.vue')
  }, 
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/Shop.vue')
  }, 
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router