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

#new-game-container {
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 2em;
  border: solid #4b8a4a 1px;
  border-radius: 5px;
  background-color: #4b8a4a;
  background-size: cover;
  color: #333;
  box-shadow: 0 30px 80px 10px rgb(0,0,0,0.8);
  transition: all .2s ease-in-out;
}

#new-game-container:hover {
  transform: scale(1.1);
}
</style>
