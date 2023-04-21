import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: 'posts',
          name: 'posts',
          component: () => import('../components/Posts.vue')
        },
        {
          path: 'create',
          name: 'create',
          component: () => import('../components/CreatePost.vue')
        },
        {
          path: 'edit/:id',
          name: 'edit',
          component: () => import('../components/EditDeletePost.vue')
        },
      ]
    },
  ]
})

export default router
