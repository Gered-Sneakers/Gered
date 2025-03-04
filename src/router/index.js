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
    path: '/in',
    name: 'in',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/out',
    name: 'out',
    component: () => import('../views/Logout.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/Help.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/Add.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/f11',
    name: 'f11',
    component: () => import('../views/fullScreenForm.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test.vue')
  }
  /* ADD sneaker , ADD leverancier , ADD brand */
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router