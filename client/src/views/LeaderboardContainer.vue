<template lang="html">
  <div id="score-container">
  <b-button pill to="/" v-on:click="seeScoresPage">Back</b-button>
  <scores-page></scores-page>
  <!-- <b-button pill v-if="!selectScoresPage" v-on:click="seeScoresPage">Leaderboard</b-button> -->
  </div>
</template>

<script>

import ScoresPage from '../components/ScoresPage.vue';
import {eventBus} from '../main.js';

export default {
  name: 'leaderboard-container',
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
