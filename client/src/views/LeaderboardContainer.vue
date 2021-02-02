<template lang="html">
  <div class="score-container">
  <scores-page :gameStatus="gameStatus"></scores-page>
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
  width: 40%;
  margin: 0 auto 5rem auto;
  background-color: #fff;
}

</style>
