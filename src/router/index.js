import { compile } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/addsneaker',
    name: 'addsneaker',
    component: () => import('../views/Add_Sneaker.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('../views/Guide.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue')
  },
  {
    path: '/sneakers',
    name: 'showSneakers',
    component: () => import('../views/ShowSneakers.vue')
  },
  {
    path: '/csv',
    name: 'csv',
    component: () => import('../views/Csv.vue')
  },
  {
    path: '/verkoop',
    name: 'verkoop',
    component: () => import('../views/Verkoop.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router