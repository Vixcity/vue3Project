import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';

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

// 路由守卫
router.beforeEach((to, from, next) => {
  /**
   * to: 从哪个页面
   * from: 到哪个页面
   * next: 执行才会跳转
  */
  // 判断用户是否登录
  // console.log(to, from, store.state.userInfo);
  const uInfo = store.state.userInfo.userInfo;
  if (!uInfo.account) {
    // 未登录
    if (to.path === '/login') {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
