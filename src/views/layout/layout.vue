<template>
<!--主布局界面，引用了左侧菜单，导航条以及页面下的router-view-->
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
  import { Sidebar, Navbar, AppMain } from 'views/layout'

  export default {
    components: {
      Sidebar,
      Navbar,
      AppMain
    },
    computed: {
      sidebar() {
        return this.$store.state.app.sidebar;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.hideSidebar {
      .sidebar-container {
        width: 36px;
        overflow: inherit;
      }
      .main-container {
        margin-left: 36px;
      }
    }
  }

  .sidebar-container {
    position: fixed;
    width: 180px;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow-y: auto;
    transition: width 0.35s ease-out;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .main-container {
    min-height: 100%;
    margin-left: 180px;
    transition: margin-left 0.35s ease-out;
  }
</style>
