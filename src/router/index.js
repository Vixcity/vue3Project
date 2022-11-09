import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/',
    name: 'layOut',
    // redirect: '/index',
    component: () => import('../views/layOut/layOut.vue'),
    // 路由嵌套
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/pages/roleList.vue'),
      },
      {
        path: '/userList',
        name: 'userList',
        component: () => import('../views/pages/userList.vue'),
      },
      {
        path: '/shopList',
        name: 'shopList',
        component: () => import('../views/pages/shopList.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
