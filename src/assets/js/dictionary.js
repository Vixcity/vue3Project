const systemModule = [
  {
    id: '1',
    name: '账号管理',
    icon: 'Avatar',
    path: '',
    children: [
      {
        id: '1-1',
        name: '账号权限',
        icon: 'Operation',
        path: '/index',
      },
    ],
  },
  {
    id: '2',
    name: '角色管理',
    icon: 'Box',
    path: '',
    children: [
      {
        id: '2-1',
        name: '角色权限',
        icon: 'Operation',
        path: '',
        children: [{
          id: '2-1-1',
          name: '角色权限修改',
          icon: 'Edit',
          path: '/userList',
        }],
      },
    ],
  },
  {
    id: '3',
    name: '商品管理',
    icon: 'ShoppingBag',
    path: '/shopList',
  },
];

export { systemModule };
