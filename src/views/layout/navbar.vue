<<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <level-bar></level-bar>
    <tab-view></tab-view>
    <error-log v-if="logs.length > 0" :logsList="logs" class="error-container"></error-log>
    <screen-full class="screenfull"></screen-full>

    <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'"/>
        <i class="el-icon-caret-bottom"></i>
      </div>

      <el-dropdown-menu slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>首页</el-dropdown-item>
        </router-link>

        <el-dropdown-item divided><span @click="logout" style="display: block">退出登陆</span></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
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
        'sidebar',
        'avatar'
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
      },
      logout() {

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
      right: 120px;
      color: red;
    }
    .avatar-container {
      height: 50px;
      display: inline-block;
      position: absolute;
      right: 35px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          top: 25px;
          right: -20px;
          font-size: 12px;
        }
      }
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
