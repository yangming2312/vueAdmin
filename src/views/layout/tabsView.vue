<template>
  <div class="tab-view-container">
    <router-link class="tab-view" v-for="tag in Array.from(visitedViews)" :to="tag.path" :key="tag.path">
      <el-tag :closable="true" :type="isActive(tag.path)?'primary':''" @close="closeTag(tag, $event)">
        {{tag.name}}
      </el-tag>
    </router-link>
  </div>
</template>

<script>
  export default {
    computed: {
      visitedViews() {    // 打开访问后的视图
        return this.$store.state.app.visitedViews.slice(-6);
      }
    },
    methods: {
      closeTag(view, $event) {    // 关闭当前路由
        this.$store.dispatch('delVisitedViews', view);
        $event.preventDefault();  // 阻止默认行为
      },
      generateRoute() {     // 生成路由
        if (this.$route.matched[this.$route.matched.length - 1].name) {
          return this.$route.matched[this.$route.matched.length - 1];
        }
        this.$route.matched[0].path = '/';
        return this.$route.matched[0];
      },
      addTabViews() {     // 新增路由
        this.$store.dispatch('addVisitedViews', this.generateRoute());
      },
      isActive(path) {
        return path === this.$route.path;
      }
    },
    watch: {      // 监控路由变化，改变路由
      $route() {
        this.addTabViews();
      }
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .tab-view-container {
    display: inline-block;
    vertical-align: top;
    margin-left: 10px;
      .tab-view {
        margin-left: 10px;
      }
  }
</style>
