/**
 *  getters获取数据
 */
const getters = {
  sidebar: state => state.app.sidebar,                             // 侧边栏
  permission_routes: state => state.permission.routes,             // 按权限过滤后的路由
  visitedViews: state => state.app.visitedViews,                   // tab路由
  avatar: state => state.user.avatar,
  token: state => state.user.token,                                // token
};
export default getters;
