1.多环境，使用process.env.NODE_ENV读取当前运行环境。根据路由文件去拉取同步或异步组件
2.页面布局，主布局组件layout.vue，包含导航条，侧边条等布局组件。操作组件都在layout的子路由下进行。
3.布局组件：
  layout.vue为主组件，
  sidebar.vue为左侧菜单
  sidebarItem.vue为左侧菜单子选项内容，数据从全局的vuex中，根据权限生成后获取。图标为全局组件,使用的是svg图标
4.vuex:
  user.js存储用户授权相关信息