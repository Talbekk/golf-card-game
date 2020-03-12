<template lang="html">
  <div id="match-details-container">
    <!-- <p><b>Last Match:</b></p> -->
    <p><b>Played:</b> {{this.match.date.date}} @ {{this.match.date.time}}</p>
    <p><b>Score:</b> {{this.match.score}}</p>
    <p><b>Scorecard:</b></p>
    <score-card :scoreCard="this.match.card"/>
  </div>
</template>

<script>

import ScoreCard from '../components/ScoreCard.vue';

export default {
  name: "match-details",
  props:['match', 'chosenScoreCard'],
  components: {
    'score-card': ScoreCard
  }
}
</script>

<style lang="css" scoped>

/* #match-details-container{
  border: solid black 1px;
  padding: 2em;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2em;
} */
</style>
