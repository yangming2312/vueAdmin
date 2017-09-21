/**
 *  getters获取数据
 */
const getters = {
  sidebar: state => state.app.sidebar,                             // 侧边栏
  permission_routes: state => state.permission.routes,             // 按权限过滤后的路由
  visitedViews: state => state.app.visitedViews                    // tab路由
};
export default getters;
