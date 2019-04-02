
import Vue from 'vue';
import App from './app';
import { router } from '@config/router';
import AppGlobal from '@config/global';
import '@lib/rem';

import { defineCustomElements } from './external/loader';

Vue.config.productionTip = false;

defineCustomElements(window);

// 全局数据注入
Vue.prototype.$App = AppGlobal;
Vue.config.ignoredElements = [/nb-\w*/,/ht-\w*/];

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
