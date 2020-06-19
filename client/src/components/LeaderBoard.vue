<template lang="html">
  <div>
    <div class="leaderboard-table">
    <b-table large hover head-variant="dark" responsive border :items="scores" :fields="fields">
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
        { key: 'card', label: 'Card', class: 'cardItem' }
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

.cardItem {
  max-width: 10%;
}

#btn-main {
  width: 75%;
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
</style>
