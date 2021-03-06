import Vue from 'vue';
import App from './App.vue';
import { global } from './middlewares';

Vue.config.productionTip = false;

export default ({ router, store }) => {
  return new Vue({
    router,
    store,
    middlewares: [global],
    render: h => h(App),
  });
};
