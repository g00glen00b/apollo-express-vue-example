import Vue from 'vue';
import App from './App.vue';
import AtUI from 'at-ui';
import 'at-ui-style';

Vue.use(AtUI);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
