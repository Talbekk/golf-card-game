<template lang="html">
  <div id="game-header">
    <b-navbar toggleable="lg" variant="faded" type="light">
      <b-navbar-brand href="#">
        <img src="../assets/GameLogo.svg" height="75" alt=""/>
      </b-navbar-brand>
      <b-navbar-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/leaderboard">Leaderboard</b-nav-item>
      <b-nav-item href="#">Rules</b-nav-item>
      <b-nav-item v-if="tutorialStatus" v-on:click="newGame" href="#" right>Restart Game</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: "logo-header",
  props:['tutorialStatus'],
  methods: {
    newGame(){
      eventBus.$emit('start-new-game');
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
