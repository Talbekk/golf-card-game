<template lang="html">
  <div>
    <div class="leaderboard-table">
    <b-table large hover head-variant="dark" border :items="scores" :fields="fields">
        <template v-slot:cell(card)="data">
          <b-button v-on:click="showScoreCard(data)"id="btn-main">View</b-button>
        </template>
    </b-table>
    </div>
      <b-modal v-model="modalShow" scrollable title="Score Card" ok-only>
        <score-card :scoreCard="score"></score-card>
      </b-modal>
  </div>
</template>

<script>
import ScoreCard from './ScoreCard.vue';

export default {
  name: "leaderBoard",
  props: ['scores', 'title', 'gameStatus'],
  data() {
    return {
      modalShow: false,
      score: [],  
      fields: [
        { key: 'golfer', label: 'Name' },
        { key: 'score', label: 'Score', sortable: true },
        { key: 'card', label: 'Card' }
        ]
    }
  },
   components: {
    "score-card": ScoreCard
  },
  methods: {
    showScoreCard(data){
      this.modalShow = true;
      this.score = Object.values(data.item.card);
      console.log("modal", this.modalShow);
    }
  }
}
</script>

<style lang="css" scoped>


table, th, td {
  border: 1px solid black;
}

table {
  width: 100%;
}

th {
  height: 30px;
}

</style>
