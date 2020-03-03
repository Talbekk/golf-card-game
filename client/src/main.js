import './firebase';
import Vue from 'vue';
import App from './App.vue';
import * as VueFire from 'vuefire';
import BootStrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(VueFire);
Vue.use(BootStrapVue);

export const eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
