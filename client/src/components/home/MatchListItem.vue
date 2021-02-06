<template lang="html">
  <tr>
    <td class="date-column">{{formattedDate }}</td>
    <td>{{this.match.card.length}}</td>
    <td>{{averageScore}}</td>
    <td>{{this.match.score}}</td>
    <td>
        <button class="action-btn" v-on:click="showScoreCard">View</button>
    </td>
  </tr>
</template>

<script>

import ScoreCard from '../scores/ScoreCard.vue';
import {eventBus} from '../../main';

export default {
  name: "match-list-item",
  props:['match'],
  components: {
    'score-card': ScoreCard
  },
  computed: {
    averageScore(){
      const totalGames = this.match.card.length;
      const totalScore = this.match.score;
      const average = totalScore / totalGames;
      return Math.floor(average);
    },
    formattedDate(){
      const splitDate = this.match.date.date.split("-");
      const splitYear = splitDate[2].split("");
      const formattedYear = splitYear.splice(2);
      const trimmedYear = formattedYear.join("");
      const formattedDate = splitDate.splice(0, 2);
      formattedDate.push(trimmedYear);
      return formattedDate.join("-");
      // return splitDate.splice(0, 2) + trimmedYear;
    }
  },
  methods: {
    showScoreCard(){
        eventBus.$emit('view-match-list-scorecard', this.match.card);
    }
  }
}
</script>

<style lang="css" scoped> 

td {
  font-size: 1.5rem;
}

tr:hover {
    background-color: #eee;
}
</style>
