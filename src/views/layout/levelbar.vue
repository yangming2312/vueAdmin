<!--面包屑组件-->
<template>
  <el-breadcrumb separator="/" class="app-levelBar">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <!--不使用的节点-->
       <span v-if="item.redirect === 'noredirect'|| index === item.length - 1" class="no-redirect">{{item.name}}</span>
       <router-link v-else :to="item.redirect || item.path">{{item.name}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
  export default {
    data() {
      return {
        levelList: null
      };
    },
    created() {
      this.getBreadcrumb();
    },
    methods: {
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name);
        const first = matched[0];
        if (first && (first.name !== '首页' || first.path !== '')) {
          matched = [{ name: '首页', path: '/' }].concat(matched);
        }
        this.levelList = matched;
        console.log(matched);
      }
    },
    watch: {    // 监测路由变化
      $route() {
        this.getBreadcrumb();
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-levelBar .el-breadcrumb {
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
</style>
