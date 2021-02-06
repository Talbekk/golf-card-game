<template lang="html">
      <tr>
      <td>{{this.score.golfer}}</td>
      <td>{{this.score.score}}</td>
      <td>
          <button class="view-btn" v-on:click="showScoreCard">View Card</button>
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

.cardItem {
  max-width: 10%;
}

.btn-view-card {
  width: 50%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}

td {
  font-size: 1.8rem;
}

tr:hover {
    background-color: #eee;
}

.view-btn {
    text-transform: uppercase;
    font-weight: 500;
    margin: .5rem;
    padding: .2rem;
    transition: all .2s;
}

.view-btn:hover {
   background-color: #aaa;
}

</style>
