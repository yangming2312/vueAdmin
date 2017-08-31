<template>  
  <!--图标svg组件-->
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'icon-svg',
  props: {
    iconClass: {
      type: String,
      requied: true
    }
  },
  computed: {
    iconName() {
      // 注意这里的用的是反引号``
      return `#icon-${this.iconClass}`;
    }
  }
};
</script>

