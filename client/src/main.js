import './firebase';
import Vue from 'vue';
import App from './App.vue';
import * as VueFire from 'vuefire';
import BootStrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';
import {firebase} from './firebase.js';

Vue.use(VueFire);
Vue.use(BootStrapVue);

export const eventBus = new Vue();

Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log("loggedIn", user);
  if(!app) {
    app = new Vue({
                  router,
                  render: h => h(App),
                  }).$mount('#app')
  }
})
