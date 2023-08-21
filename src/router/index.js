import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/changepassword',
      name: 'changepassword',
      component: () => import('../views/ResetPassword.vue')
    },
    {
      path: '/home',
      name: 'home-page',
      component: () => import('../views/HomePage.vue')
    }
  ]
})

export default router
