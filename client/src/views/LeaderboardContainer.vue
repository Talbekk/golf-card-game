<template lang="html">
  <div id="score-container">
  <scores-page :gameStatus="gameStatus"></scores-page>
  </div>
</template>

<script>

import ScoresPage from '../components/ScoresPage.vue';
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

#score-container {
  margin-left: auto;
  margin-right: auto;
  padding: 8px 5px 12px 5px;
  max-width: 600px;
  font-size: 13px;
}

</style>
