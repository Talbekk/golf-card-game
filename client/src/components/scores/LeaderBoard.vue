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

table {
  empty-cells: show;
  border-collapse: collapse;
  table-layout: auto;
  font-size: 1.5rem;
  margin: 2rem;
  text-align: center;
}

table, tr, th, td  {
  border: 1px solid black;

}

th {
  padding: 0.5em;
  text-transform: uppercase;
  font-size: 2rem;
  background-color: #004225;
  color: #fff;
}

.table-container {
  display: grid;
  justify-content: stretch;
}

.popup-container {
  display: grid;
  grid-template-rows: min-content 1fr;
  padding: 1rem;
}

.pop-options {
  display: flex;
  justify-content: flex-end;
}

.popup-close-btn {
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  color: red;
  cursor: pointer;
}

</style>
