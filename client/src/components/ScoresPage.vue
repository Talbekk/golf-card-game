<template lang="html">
  <div id="leaderboard-container">
    <h3>Leaderboard:</h3>
    <table>
  <tr>
    <th>Name</th>
    <th>Score</th>
  </tr>
  <tr v-for="score in sortedScores">
    <td>{{score.golfer}}</td>
    <td>{{score.score}}</td>
  </tr>
</table>
  </div>

</template>

<script>

import {db} from '../firebase.js';

export default {
  name: "playerScores",
  data(){
    return {
      scores: {},
      sortedScores: []

    }
  },
  created() {
   db.ref('scores').once('value', storedValue => this.scores = storedValue.toJSON());
 },
  watch: {
    scores(){
      this.sortedScores = Object.keys(this.scores).map(key => {
        return this.scores[key];
      })
      this.sortedScores.sort(function(a,b){
        return a.score-b.score;
      })
    }
  }
 }
</script>

<style lang="css" scoped>

table, th, td {
  border: 1px solid black;
}

#leaderboard-container{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: auto;
  padding: 8px 5px 12px 5px;
  max-width: 600px;
  font-size: 13px;
}

table {
  width: 75%;
}

th {
  height: 30px;
}

</style>
