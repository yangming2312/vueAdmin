//The Vue build version to load with the `import` command
//(runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'                                //vuex
import ElementUI from 'element-ui';                        //element组件库
import 'element-ui/lib/theme-default/index.css';
import IconSvg from 'components/icon-Svg'                  //全局图标组件

Vue.config.productionTip = false

/**
 * 注册全局组件
 */
Vue.component('icon-svg', IconSvg);
Vue.use(ElementUI);

/*eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})