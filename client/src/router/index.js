import Vue from 'vue';
import Router from 'vue-router';
import Game from '../views/Game.vue';
import IntroScreen from '../views/IntroScreen.vue';
import Leaderboard from '../views/LeaderboardContainer.vue';
import Rules from '../views/GameRules.vue';
import Login from '../views/Login.vue';
import {firebase} from '../firebase.js';

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: IntroScreen,
    meta: {requiresAuth: true}
  },
  {
    path: '/game',
    name: 'game',
    component: Game,
    meta: {requiresAuth: true}
  },
  {
    path: '/leaderboard',
    name: 'leaderboard',
    component: Leaderboard
  },
  {
  path: '/rules',
  name: 'rules',
  component: Rules
},
{
path: '/login',
name: 'login',
component: Login
}
]

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated){
    next("/login");
  } else {
    next();
  }
})

export default router;
