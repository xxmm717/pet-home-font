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
        },
        {
          path: '/announcement',
          component: () => import('@/views/Announcement/index.vue'),
          redirect: '/list',
          children: [
            {
              path: '/list',
              component: () => import('@/views/Announcement/components/List.vue')
            },
            {
              path: '/detail',
              name: 'detail',
              component: () => import('@/views/Announcement/components/Detail.vue')
            }
          ]
        },
        {
          path: '/lost',
          component: () => import('@/views/Lost/index.vue'),
          redirect: '/lostIndex',
          children: [
            {
              path: '/lostIndex',
              component: () => import('@/views/Lost/components/Main.vue')
            },
            {
              path: '/lostPub',
              component: () => import("@/views/Lost/components/Publish.vue")
            }
          ]
        },
        {
          path: '/platform',
          component: () => import('@/views/Platform/index.vue'),
          redirect: '/platformMain',
          children: [
            {
              path: '/platformMain',
              component: () => import('@/views/Platform/components/Main.vue')
            },
            {
              path: '/platformPub',
              component: () => import("@/views/Platform/components/Pub.vue")
            },
            {
              path: '/inside/:id',
              name: 'inside',
              component: () => import('@/views/Platform/components/Inside.vue')
            }
          ]
        },
        {
          path: '/volunteer',
          component: () => import('@/views/Volunteer/index.vue')
        },
        {
          path: '/station',
          component: () => import('@/views/Station/index.vue')
        },
        {
          path: '/rescue',
          component: () => import('@/views/Rescue/index.vue')
        },
        {
          path: '/my',
          component: () => import('@/views/My/index.vue'),
          redirect: '/myMain',
          children: [
            {
              path: '/myMain',
              component: () => import('@/views/My/components/MyMain.vue')
            },
            {
              path: '/myEdit',
              component: () => import('@/views/My/components/MyEdit.vue')
            }
          ]
        }
      ]
    }
  ]
})

export default router
