import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'Base',
      path: '/',
      component: () => import('../views/HomeView.vue'),
    },
    {
      name: 'home',
      path: '/home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      name: 'category',
      path: '/category',
      component: () => import('../views/CategoryView.vue'),
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
    {
      name: 'post',
      path: '/post/:id',
      component: () => import('../views/ArticleView.vue'),
      props: true,
    },
  ],
});

export default router;
