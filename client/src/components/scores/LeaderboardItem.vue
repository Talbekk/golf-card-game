<template lang="html">
      <tr>
      <td>{{this.score.golfer}}</td>
      <td>{{this.score.score}}</td>
      <td>
          <button class="action-btn" v-on:click="showScoreCard">View Card</button>
      </td>
        </tr>
</template>

<script>
import ScoreCard from '../scores/ScoreCard';
import {eventBus} from '../../main';

export default {
  name: "leaderboard-item",
  props: ['score'],
   components: {
    "score-card": ScoreCard
  },
  methods: {
    showScoreCard(){
        this.$modal.show('leaderboard-scorecard');
        eventBus.$emit('view-leaderboard-scorecard', Object.values(this.score.card));
    }
  }
}
</script>

<style lang="css" scoped>

td {
  font-size: 1.8rem;
}

tr:hover {
    background-color: #eee;
}

</style>
