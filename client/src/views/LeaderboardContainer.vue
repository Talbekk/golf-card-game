<template lang="html">
  <div class="score-container">
  <scores-page :gameStatus="gameStatus"/>
  </div>
</template>

<script>

import ScoresPage from '../components/scores/ScoresPage.vue';
import {eventBus} from '../main.js';

export default {
  name: 'leaderboard-container',
  props:['gameStatus'],
  components: {
    "scores-page": ScoresPage
  },
  methods: {
    seeScoresPage(){
      eventBus.$emit('view-leaderboard');
    }
  }
}
</script>

<style lang="css" scoped>

.score-container {

  box-sizing: border-box;
  width: 90%;
  margin: 0 auto 5rem auto;
  background-color: #fff;
  padding: 1rem;
  color: #000;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
              0 2px 4px rgba(0,0,0,0.07), 
              0 4px 8px rgba(0,0,0,0.07), 
              0 8px 16px rgba(0,0,0,0.07),
              0 16px 32px rgba(0,0,0,0.07), 
              0 32px 64px rgba(0,0,0,0.07);
}

</style>
