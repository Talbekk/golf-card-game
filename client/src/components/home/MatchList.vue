<template lang="html">
  <div>
    <div id="match-list">
      <b-table hover head-variant="dark" border :items="matches" :fields="fields">
        <template v-slot:cell(averageScore)="data">
          {{ getAverageScore(data) }}
        </template>
        <template v-slot:cell(card)="data">
          <b-button v-on:click="showScoreCard(data)" id="btn-main" variant="dark">View</b-button>
        </template>
      </b-table>
    </div>
    <b-modal v-model="modalShow" scrollable title="Score Card" ok-only>
      <score-card :scoreCard="score"/></score-card>
    </b-modal>
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
      this.modalShow = true;
      this.score = data.item.card;
      console.log("modal", this.modalShow);
    }
  }
}
</script>

<style lang="css" scoped>

#match-list {
  padding: .5em;
  font-size: 1.5rem;
  }
</style>
