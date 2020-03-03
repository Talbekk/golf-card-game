import Vue from 'vue';
import Router from 'vue-router';
import Game from '../views/Game.vue';

Vue.use(Router)

const routes = [
  {
    path: '/game',
    name: 'game',
    component: Game
  }
]

const router = new Router({
  routes
});

export default router;
