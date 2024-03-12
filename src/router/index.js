import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Login/index.vue'),
      redirect: '/login',
      children: [
        {
          path: '/login',
          component: () => import('@/views/Login/components/LoginMain.vue'),
        },
        {
          path: '/register',
          component: () => import('@/views/Login/components/Rgister.vue')
        }
      ]
    },
    {
      path: '/index',
      name: 'layout',
      component: () => import('@/views/Layout/index.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: () => import('@/views/Home/index.vue')
        }
      ]
    }
  ]
})

export default router
