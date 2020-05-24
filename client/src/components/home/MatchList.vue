<template lang="html">
  <div>
    <div id="match-list">
      <b-table large hover head-variant="dark" border :items="matches" :fields="fields">
        <template v-slot:cell(averageScore)="data">
          {{ getAverageScore(data) }}
        </template>
        <template v-slot:cell(card)="data">
          <b-button v-on:click="showScoreCard(data)"id="btn-main">View</b-button>
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
import ScoreCard from '../ScoreCard.vue';

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

#match-list{
  padding: 1em;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(5rem, 1fr));
  font-size: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid #4b8a4a 1px;
  border-radius: 5px;
  background-color: #4b8a4a;
  background-size: cover;
  color: #333;
  box-shadow: 0 30px 80px 10px rgb(0,0,0,0.8); */
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start; */
}

#list-item{
  /* border: solid black 1px;
  padding: 2em;
  border-radius: 10%;
  margin: 2em;
  max-width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border: solid black 1px;
  margin: 2em; */
  border: solid #4b8a4a 1px;
  border-radius: 5px;
  background-color: #4b8a4a;
  background-size: cover;
  color: #333;
  box-shadow: 0 5px 15px 0px rgb(0,0,0,0.7);
  list-style: none;
}

ul{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 3em;
  max-width: 100%;
}
</style>
