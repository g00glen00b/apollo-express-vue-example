import Vue from 'vue';
import App from './App.vue';
import AtUI from 'at-ui';
import 'at-ui-style';
import VueApollo from 'vue-apollo';
import apolloClient from './apollo';
import router from './router';

Vue.use(AtUI);
Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  render: h => h(App),
  router,
  provide: apolloProvider.provide()
}).$mount('#app');
