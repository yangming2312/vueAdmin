import Cookies from 'js-cookie';

const app = {
  state: {
    sidebar: {        // 侧边栏状态
      opened: !+Cookies.get('sidebarStatus')
    },
    visitedViews: []  // tab路由集合
  },
  mutations: {
    // 是否收起左侧菜单,使用js-cookie记录状态
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1);
      } else {
        Cookies.set('sidebarStatus', 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
    },
    // 添加tab状态到store
    ADD_VISITED_VIEWS: (state, view) => {
      if (state.visitedViews.some(x => x.path === view.path)) {
        return;
      }
      state.visitedViews.push(
        {
          name: view.name,
          path: view.path
        }
      );
    },
    // 移除tab状态
    DEL_VISITED_VIEWS: (state, view) => {
      let index;
      for (const [i, v] of state.visitedViews.entries()) {    // key value for
        if (v.path === view.path) {
          index = i;
          break;
        }
      }
      state.visitedViews.splice(index, 1);
    }
  },
  actions: {
    // 保存侧边栏到store
    ToggleSideBar: ({ commit }) => {
      commit('TOGGLE_SIDEBAR');
    },
    // 提交添加tab
    addVisitedViews: ({ commit }, view) => {
      commit('ADD_VISITED_VIEWS', view);
    },
    delVisitedViews: ({ commit }, view) => {
      commit('DEL_VISITED_VIEWS', view);
    }
  }
};

export default app;
