<template lang="html">
  <div class="game-item">
    <h4 class="game-title">{{this.game.mode}}</h4>
    <button v-if="this.game.mode === 'Single Player'" to="/game" v-on:click="clickedNewGame" class="action-btn" type="submit">Tee Off</button>
    <p class="button-replacement-info" v-if="this.game.mode !== 'Single Player'">&ldquo;Coming Soon&rdquo;</p>
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

.game-item {
  text-align: center;
  padding: 1rem;
  border: 1px solid #000;
  margin: 1rem;
}

.game-title {
  font-size: 2rem;
  font-weight: 400;
}

.button-replacement-info {
  font-style: italic;
  font-size: 1.7rem;
  font-weight: 200;
  padding: .6rem;
  margin: .5rem 1rem;
}
</style>
