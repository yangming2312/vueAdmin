<<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <level-bar></level-bar>
    <tab-view></tab-view>
    <error-log v-if="logs.length > 0" :logsList="logs" class="error-container"></error-log>
    <screen-full class="screenfull"></screen-full>
  </el-menu>
</template>

<script>
  import Hamburger from 'components/hamburger';
  import LevelBar from './levelbar';
  import TabView from './tabsView';
  import ScreenFull from 'components/screenfull';
  import { mapGetters } from 'vuex';
  import ErrorLog from 'components/errorLog';
  import errorLog from 'store/errorLog';

  export default {
    components: {
      Hamburger,
      LevelBar,
      TabView,
      ScreenFull,
      ErrorLog
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    data() {
      return {
        logs: errorLog.state.errLogs      // 错误日志集合
      };
    },
    methods: {
      toggleSideBar() {
        this.$store.dispatch('ToggleSideBar');
      }
    }
  };

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .navbar {
    height: 50px;
    line-height: 50px;
    border-radius: 0px !important;
    .hamburger-container {
      padding: 0 10px;
      float: left;
      height: 50px;
      line-height: 58px;
    }
    .error-container {
      display: inline-block;
      position: absolute;
      right: 150px;
    }
    .screenfull {
      position: absolute;
      top: 16px;
      right: 90px;
      color: red;
    }
    .el-breadcrumb {
      display: inline-block;
      font-size: 14px;
      line-height: 50px;
      margin-left: 10px;
      .no-redirect {
        color: #97a8be;
        cursor: text;
      }
    }
  }
</style>
