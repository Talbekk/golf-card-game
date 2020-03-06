import Vue from 'vue';
import Router from 'vue-router';
import Game from '../views/Game.vue';
import IntroScreen from '../views/IntroScreen.vue';
import Leaderboard from '../views/LeaderboardContainer.vue';
import Rules from '../views/GameRules.vue';
import Login from '../views/Login.vue';

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'home',
    component: IntroScreen
  },
  {
    path: '/game',
    name: 'game',
    component: Game
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

export default router;
