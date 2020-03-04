<template lang="html">
  <div id="game-header">
    <b-navbar toggleable="lg" variant="faded" type="light">
      <b-navbar-brand href="#">
        <img src="../assets/GameLogo.svg" height="75" alt=""/>
      </b-navbar-brand>
      <b-navbar-nav>
      <b-nav-item to="/" v-on:click="reset">Home</b-nav-item>
      <b-nav-item to="/leaderboard">Leaderboard</b-nav-item>
      <b-nav-item to="/rules">Rules</b-nav-item>
      <b-nav-item v-if="gameStatus" v-on:click="newGame" href="#" right>Restart Game</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: "logo-header",
  props:['gameStatus'],
  methods: {
    newGame(){
      eventBus.$emit('start-new-game');
    },
    reset(){
      eventBus.$emit('reset-app');
    }
  }
}
</script>

<style lang="css" scoped>

.game-logo {
  max-width: 7em;
  max-height: 7em;
  padding-bottom: 2em;
}

</style>
