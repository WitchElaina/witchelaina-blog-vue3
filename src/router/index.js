import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Base',
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      name: 'Home',
      path: '/home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      name: 'catalog',
      path: '/catalog',
      component: () => import('../views/HomeView.vue'),
    },
    {
      name: 'archive',
      path: '/archive',
      component: () => import('../views/HomeView.vue'),
    },
    {
      name: 'anime',
      path: '/anime',
      component: () => import('../views/HomeView.vue'),
    },
    {
      name: 'friends',
      path: '/friends',
      component: () => import('../views/HomeView.vue'),
    },
  ],
});

export default router;
