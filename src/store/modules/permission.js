import { asyncRouterMap, constantRouterMap } from '@/router';

const permission = {
  state: {
    routes: constantRouterMap.concat(asyncRouterMap)
  },
  mutations: {

  }
};
export default permission;
