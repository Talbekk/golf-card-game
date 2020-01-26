import './firebase';
import Vue from 'vue';
import App from './App.vue';
import * as VueFire from 'vuefire';

Vue.use(VueFire);

export const eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
