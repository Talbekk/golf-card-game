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
   // Object.keys(this.scores).sort(function(a, b){
   //   return scores[b].score - scores[a].score;
   // })
   // .forEach(function(key){
   //   sortedScores.push(scores[key]);
   // });
 //   this.scores = this.newArray.sort(function(a, b){
 //     return a.score-b.score
 // })
 }
}


// Object
//     .keys(data).sort(function(a, b){
//         return data[b].score - data[a].score;
//     })
//     .forEach(function(key) {
//         sorted[key] = data[key];
//     });
//  watch: {
//    scores(){
//
//  }
// }

   //
   //    function
   //
   //    function compare(a, b) {
   //   // Use toUpperCase() to ignore character casing
   //   const bandA = a.band.toUpperCase();
   //   const bandB = b.band.toUpperCase();
   //
   //   let comparison = 0;
   //   if (bandA > bandB) {
   //     comparison = 1;
   //   } else if (bandA < bandB) {
   //     comparison = -1;
   //   }
   //   return comparison;
   // }
   //
   // singers.sort(compare);

   /* returns [
     { name: 'Steven Tyler', band: 'Aerosmith',  born: 1948 },
     { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
     { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
     { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 }
   ] */
 }
 // methods: {
 //   compare(a, b){
 //     const scoreA = a.score;
 //     const scoreB = b.score;
 //
 //     let comparison = 0;
 //     if(scoreA > scoreB){
 //       comparison = 1;
 //     } else if(scoreA < scoreB) {
 //       comparion = -1;
 //     }
 //     return comparison;
 //   }
 // }

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
