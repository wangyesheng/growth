import { createRouter, createWebHistory } from 'vue-router';
import TODO from '../views/TODO.vue';

const routes = [
  {
    path: '/todo',
    name: 'TODO',
    component: TODO,
  },
  {
    path: '/processing',
    name: 'Processing',
    component: () => import('../views/Processing.vue'),
  },
  {
    path: '/completed',
    name: 'Completed',
    component: () => import('../views/Completed.vue'),
  },
  { path: '/', redirect: '/todo' },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
