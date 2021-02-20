import Vue from 'vue';
import App from './App.vue'
// 引入router.js
import router from "./router.js";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
  router, // 缩写，相当于 router:router,在vue使用
  render: h => h(App),
}).$mount('#app')
