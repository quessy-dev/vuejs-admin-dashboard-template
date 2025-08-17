import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import Analytics from './pages/Analytics.vue'
import Users from './pages/Users.vue'
import Settings from './pages/Settings.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/analytics',
      component: Analytics
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/settings',
      component: Settings
    },
  ]
})

export default router
