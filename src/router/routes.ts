// 对外暴露配置路由(常量路由)
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', //命名路由
    meta: {
      title: '登录', //菜单标题
      hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: 'Promotion', //菜单文字左侧的图标,支持element-plus全部图标
    },
  },
  {
    // 登录成功以后展示数据的路由
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'layout', //命名路由,
    meta: {
      title: '首页', //菜单标题
      hidden: false, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: 'Promotion', //菜单文字左侧的图标,支持element-plus全部图标
    },
  },
  {
    // 登录成功以后展示数据的路由
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404', //命名路由
    meta: {
      title: '404',
      hidden: true,
      icon: 'DocumentDelete',
    },
  },
  {
    // 登录成功以后展示数据的路由
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any', //命名路由
  },
]
