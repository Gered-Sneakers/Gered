import { compile } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import Login from "../views/Login.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Settings.vue'),
    meta: { requiresAuth: true, adminOnly: true }
  },
  {
    path: '/addsneaker',
    name: 'addsneaker',    
    component: () => import('../views/Add_Sneaker.vue'),
    meta: { requiresAuth: true }
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
  },
  {
    path: '/csvdownload',
    name: 'csvdownload',
    component: () => import('../views/Csv_Download.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/qr',
    name: 'qr',
    component: () => import('../views/Qr.vue')
  },
  {
    path: "/admin",
    name: 'admin',
    component: () => import('../views/Settings.vue'),
    meta: { requiresAuth: true, adminOnly: true }
  },
  {
    path: "/unauthorized",
    name: "unauthorized",
    component: () => import("../views/Unauthorized.vue")
  },
  {
    path: "/repair",
    name: "repair",
    component: () => import("../views/Repair.vue")
  },
  {
    path: "/stock",
    name: "stock",
    component: () => import("../views/Stock.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (to.meta.requiresAuth && !token) {
    next("/login");
  } else if (to.meta.adminOnly && user.isAdmin !== true) {
    next("/unauthorized");
  } else {
    next();
  }
});

export default router