<template>
<!--主布局界面，引用了左侧菜单，以及页面下的router-view-->
  <div>
    <sidebar></sidebar>
  </div>
</template>

<script>
  import { Sidebar } from 'views/layout'

  export default {
    components: {
      Sidebar
    }
  }
</script>
