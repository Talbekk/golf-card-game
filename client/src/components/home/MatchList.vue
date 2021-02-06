<template lang="html">
  <div>
    <div class="match-list">
      <b-table hover head-variant="dark" border :items="matches" :fields="fields">
        <template v-slot:cell(averageScore)="data">
          {{ getAverageScore(data) }}
        </template>
        <template v-slot:cell(card)="data">
          <button v-on:click="showScoreCard(data)" class="view-btn">View</button>
        </template>
      </b-table>
    </div>
    <modal name="scorecard" :scrollable="true" height="auto" width="75%">
      <div class="popup-container">
        <div class="popup-close-btn" @click="$modal.hide('scorecard')">
          X
        </div>
        <div class="popup-content-container">
          <score-card :scoreCard="score"/>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import MatchDetails from './MatchDetails.vue';        
import ScoreCard from '../scores/ScoreCard.vue';

export default {
  name: 'match-list',
  props:['matches'],
  data() {
    return {
      modalShow: false,
      score: [],
      fields: [
        { key: 'date.date', label: 'Date', sortable: true },
        { key: 'card.length', label: 'Length', sortable: false },
        { key: 'averageScore', label: 'Average' },
        { key: 'score', sortable: true },
        { key: 'card', label: 'Card'}
      ],
      averageScore: 0
    }
  },
  components: {
    "match-details": MatchDetails,
    "score-card": ScoreCard
  },
  methods: {
    getAverageScore(value){
      const totalGames = value.item.card.length;
      const totalScore = value.item.score;
      const average = totalScore / totalGames;
      return Math.floor(average);
    },
    showScoreCard(data){
      // this.modalShow = true;
      this.$modal.show("scorecard");
      this.score = data.item.card;
    }
  }
}
</script>

<style lang="css" scoped>

.match-list {
  padding: .5em;
  font-size: 1.5rem;
  max-height: 500px;
  overflow-y: scroll;
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

.view-btn {
  font-size: 1.5rem;
}

</style>
  