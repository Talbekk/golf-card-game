import './firebase';
import Vue from 'vue';
import App from './App.vue';
import * as VueFire from 'vuefire';
import BootStrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';
import {firebase, db} from './firebase.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import vmodal from 'vue-js-modal';

Vue.use(vmodal)
Vue.use(VueFire);
Vue.use(BootStrapVue);

export const eventBus = new Vue();
export const test = "hi";

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

let app;
let userData;

firebase.auth().onAuthStateChanged((user) => {
  if(user) {
  db.ref().child('users').child(user.uid).once("value", (snapshot) => {
  userData = snapshot.val();
  })
}
  if(!app) {
    app = new Vue({
                  router,
                  test,
                  render: h => h(App),
                  }).$mount('#app')
  }
})
