<template lang="html">
  <div class="game-item">
    <h4 class="game-title">{{this.game.mode}}</h4>
    <div class="checkbox-tutorial-select">
      <input type="checkbox" id="checkbox" v-model="tutorialChecked">
      <label class="checkbox-tutorial-select__label" for="checkbox">Tutorial Mode</label>
    </div>
    <b-button v-if="this.game.mode === 'Single Player'" to="/game" v-on:click="clickedNewGame" class="action-btn" type="submit">Tee Off</b-button>
    <p class="button-replacement-info" v-if="this.game.mode !== 'Single Player'">&ldquo;Coming Soon&rdquo;</p>
  </div>
</template>

<script>
import { eventBus } from '../../main';

export default {
  name: 'game-mode',
  props: ['game'],
    data(){
    return {
      tutorialChecked: false
    }
  },
  methods: {
    clickedNewGame(){
      if(this.tutorialChecked){
        eventBus.$emit('set-tutorial-mode');
      }
      eventBus.$emit('start-new-game', "single-player");
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
  display: grid;
}

.game-title {
  font-size: 2rem;
  font-weight: 400;
}

.checkbox-tutorial-select{
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 25% 75%;
  margin: .5rem 0 .5rem;
  padding: 0 .5rem 0 .5rem;
}

.checkbox-tutorial-select__label{
  justify-self: start;
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0;
}

.button-replacement-info {
  font-style: italic;
  font-size: 1.7rem;
  font-weight: 200;
  padding: .6rem;
  margin: .5rem 1rem;
}

.action-btn {
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 500;
  margin: .5rem;
  padding: .5rem;
  transition: all .2s;
  background-color: #eee;
  color: #000;
  border-radius: 0;
  border: 1px solid #000;
}

.action-btn:hover {
   background-color: #aaa;
   color: #000;
}
</style>
