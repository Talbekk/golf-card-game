<template lang="html">
  <div>
    <!-- <div class="match-list">
      <b-table hover head-variant="dark" border :items="matches" :fields="fields">
        <template v-slot:cell(averageScore)="data">
          {{ getAverageScore(data) }}
        </template>
        <template v-slot:cell(card)="data">
          <button v-on:click="showScoreCard(data)" class="action-btn">View</button>
        </template>
      </b-table>
    </div> -->
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Length</th>
          <th>Average</th>
          <th>Score</th>
          <th>Card</th>
        </tr>
      </thead>
      <tbody>
        <match-list-item v-for="(match, index) in this.matches" :key="index" :match="match"/>
      </tbody>
    </table>
    <modal name="scorecard" :scrollable="true" height="auto" width="75%">
      <div class="popup-container">
        <div class="popup-close-btn" @click="$modal.hide('scorecard')">
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
import MatchListItem from './MatchListItem';     
import ScoreCard from '../scores/ScoreCard.vue';
import {eventBus} from '../../main';

export default {
  name: 'match-list',
  props:['matches'],
  data() {
    return {
      modalShow: false,
      score: [],
      chosenScoreCard: [],
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
    "match-list-item": MatchListItem,
    "score-card": ScoreCard
  },
  mounted(){
      eventBus.$on('view-match-list-scorecard', (scoreCard) => {
      this.chosenScoreCard = scoreCard;
  
    });
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

</style>
  