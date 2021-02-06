<template lang="html">
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Scorecard</th>
        </tr>
      </thead>
      <tbody>
        <leaderboard-item v-for="(score, index) in this.scores" :key="index" :score="score"/>
      </tbody>
    </table>
    <modal name="leaderboard-scorecard" :scrollable="true" height="auto" width="75%">
        <div class="popup-container">
            <div class="popup-close-btn" @click="$modal.hide('leaderboard-scorecard')">
            X
            </div>
            <div class="popup-content-container">
            <score-card :scoreCard="chosenScoreCard"/>
            </div>
        </div>
        </modal>
  </div>
</template>

<script>
import LeaderboardItem from './LeaderboardItem';
import {eventBus} from '../../main';
import ScoreCard from './ScoreCard';

export default {
  name: "leaderBoard",
  props: ['scores'],
  data() {
    return {
      chosenScoreCard: []
    }
  },
   components: {
    "leaderboard-item": LeaderboardItem,
    "score-card": ScoreCard
  },
  mounted(){
    eventBus.$on('view-leaderboard-scorecard', (scoreCard) => {
      this.chosenScoreCard = scoreCard;
    });
  }
}
</script>

<style lang="css" scoped>

.table-container {
  display: grid;
  justify-content: stretch;
}

</style>
