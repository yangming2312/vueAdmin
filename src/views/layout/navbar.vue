<<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <level-bar></level-bar>
  </el-menu>
</template>

<script>
  import Hamburger from 'components/hamburger';
  import LevelBar from './levelbar';
  import { mapGetters } from 'vuex';

  export default {
    components: {
      Hamburger,
      LevelBar
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
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
