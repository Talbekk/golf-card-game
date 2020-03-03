<template lang="html">
  <div id="score-container">
  <b-button pill v-if="selectScoresPage" v-on:click="seeScoresPage">Back</b-button>
  <scores-page v-if='selectScoresPage'></scores-page>
  <b-button pill v-if="!selectScoresPage" v-on:click="seeScoresPage">Leaderboard</b-button>
  </div>
</template>

<script>

import ScoresPage from './ScoresPage.vue';
import {eventBus} from '../main.js';

export default {
  name: 'leaderboard-container',
  props: ['selectScoresPage'],
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
</style>
