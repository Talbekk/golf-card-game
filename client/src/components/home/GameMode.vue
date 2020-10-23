<template lang="html">
  <div id="new-game-container">
    <h4>{{this.game.mode}}</h4>
    <b-button to="/game" v-on:click="clickedNewGame" id="btn-main" type="submit">Tee Off</b-button>
  </div>
</template>

<script>
import { eventBus } from '../../main.js';

export default {
  name: 'game-mode',
  props: ['game'],
  methods: {
    clickedNewGame(){
      if (this.game.mode === "Single Player"){
      eventBus.$emit('start-new-game', "single-player");
    } else {
       eventBus.$emit('start-new-game', "versus-computer");
     }
    }
    }
  }
</script>

<style lang="css" scoped>
</style>
