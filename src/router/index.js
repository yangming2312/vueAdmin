import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

import Layout from '../views/layout/layout'

/**
 * 路由映射
 * 主路由，布局，以及子路由 ,以下为routes的构造属性
 * icon:图标 string
 * hidden: 是否显示在侧边栏 boolean
 * redirect: 重定向 string
 * noDropDown: 是否可下拉 SubMenu  boolean
 * mate: {role:['admin']} 有控制权限 object
 */
export const constantRouterMap = [
  { path: '/login', hidden: true, component: _import('login/index') },
  { path: '/404', hidden: true, component: _import('error/404') },
  { path: '/401', hidden: true, component: _import('error/401') },
  {
    path: '/',
    redirect: '/dashboard',
    name: '首页',
    hidden: true,
    component: Layout,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  }
];

export default new Router({
    //滚动行为,滚动顶部
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

/**
 *  配置的菜单
 */
export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: '权限测试',
    icon: 'quanxian',
    meta: { role: ['admin'] },
    noDropDown: true,
    children: [{ path: 'index', component: _import('permission/index'), name: '权限测试页', meta: { role: ['admin'] } }]
  },
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/index',
    name: '组件',
    icon: 'zujian',
    children: [
      { path: 'index', component: _import('permission/index'), name: '权限测试页' },
      { path: 'index', component: _import('permission/index'), name: '权限测试页' }
    ]
  }
];
