<template>
    <!--左侧菜单-->
    <el-menu mode="vertical" theme="dark" unique-opened :collapse="isCollapse" :default-active="$route.path">
      <sidebar-item :routes="permission_routes"></sidebar-item>
    </el-menu>
</template>

<script>
  import { mapGetters } from 'vuex';
  import SidebarItem from './SidebarItem';

  export default {
    components: {
      SidebarItem
    },
    computed: {
      ...mapGetters([
        'permission_routes',
        'sidebar'
      ]),
      isCollapse() {
        return !this.sidebar.opened;
      }
    }
  };
</script>
