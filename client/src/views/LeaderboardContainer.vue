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
  padding: 1rem;
  color: #000;
  width: 90%;
  margin: 0 auto;
}

</style>
