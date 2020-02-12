<template lang="html">
  <div id="leaderboard-container">
  <leaderboard v-if="sortedScores" :scores='this.sortedScores' :title='title'></leaderboard>
  <leaderboard v-if="sortedLeaderBoard" :scores='this.sortedLeaderBoard'></leaderboard>
  </div>
</template>

<script>

import {db} from '../firebase.js';
import LeaderBoard from './LeaderBoard.vue';

export default {
  name: "playerScores",
  data(){
    return {
      scores: {},
      sortedScores: [],
      leaderBoard: {},
      sortedLeaderBoard: [],
      title: "Legacy"
    }
  },
  components: {
    "leaderboard": LeaderBoard
  },
  created() {
   db.ref('scores').once('value', storedValue => this.scores = storedValue.toJSON());
   db.ref('leaderboard').once('value', storedValue => this.leaderBoard = storedValue.toJSON());
 },
  watch: {
    scores(){
      this.sortedScores = Object.keys(this.scores).map(key => {
        return this.scores[key];
      })
      this.sortedScores.sort(function(a,b){
        return a.score-b.score;
      })
    },
    leaderBoard(){
      this.sortedLeaderBoard = Object.keys(this.leaderBoard).map(key => {
        return this.leaderBoard[key];
      })
      this.sortedLeaderBoard.sort(function(a,b){
        return a.score-b.score;
      })
    }
  }
 }
</script>

<style lang="css" scoped>

#leaderboard-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 5px 12px 5px;
  font-size: 13px;
  margin-left: auto;
  margin-right: auto;
}



</style>
