/**
 *  getters获取数据
 */
const getters = {
  sidebar: state => state.app.sidebar,
  permission_routes: state => state.permission.routes
};
export default getters;
