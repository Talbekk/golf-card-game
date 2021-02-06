<template lang="html">
  <div class="leaderboard-container">
    <div class="views-container">
      <h2 class="views-header">Leaderboard</h2>
      <div class="views-options">
        <button class="action-btn" v-on:click="setFilter">{{this.filter ? "Show All Scores" : "Show Best Scores"}}</button>
        <button class="action-btn" v-on:click="seeTable">{{this.tableFilter ? "Show Legacy" : "Show Current"}}</button>
      </div>
    </div>
    <div class="scoreboard-container">
      <leaderboard v-if="sortedLeaderBoard && tableFilter" :scores='this.sortedLeaderBoard' :title='newTitle' :gameStatus="gameStatus"></leaderboard>
      <leaderboard v-if="sortedScores && !tableFilter" :scores='this.sortedScores' :title='title' :gameStatus="gameStatus"></leaderboard>
    </div>
  </div>
</template>
<script>

import {db} from '../../firebase.js';
import LeaderBoard from './LeaderBoard.vue';

export default {
  name: "playerScores",
  props:['gameStatus'],
  data(){
    return {
      scores: {},
      sortedScores: [],
      leaderBoard: {},
      sortedLeaderBoard: [],
      title: "Legacy",
      newTitle: "Current",
      filter: true,
      tableFilter: true
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
      this.fillLeaderboard();
      this.filterView();
    },
    filter(){
      if (this.filter === true){
        this.filterView();
      } else {
        this.fillLeaderboard();
      }
    }
  },
  methods: {
    filterView(){
        const array = [...this.sortedLeaderBoard];
        const filteredArray = array.filter((elem, index, self) =>
          self.findIndex((t) => {
            return (t.golfer === elem.golfer)
          }) === index)
        this.sortedLeaderBoard = filteredArray;
    },
    fillLeaderboard(){
      this.sortedLeaderBoard = Object.keys(this.leaderBoard).map(key => {
        return this.leaderBoard[key];
      })
      this.sortedLeaderBoard.sort(function(a,b){
        return a.score-b.score;
      })
    },
    setFilter(){
      this.filter = !this.filter;
    },
    seeTable(){
      this.tableFilter = !this.tableFilter;
    }
  }
 }
</script>

<style lang="css" scoped>

.leaderboard-container {
  display: grid;
  grid-template-rows: min-content auto;
  height: 82vh;
}


.views-container {
  display: grid;
  grid-template-rows: repeat(2, min-content);
  width: 50%;
  margin: 0 auto;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
}

.views-header {
  background-color: #004225;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-size: 3rem;
  font-weight: 700;
  padding: .5rem 0;
}

.views-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  padding-bottom: .5rem;
}

.scoreboard-container {
    overflow-y: auto;
    padding: 0;
    margin: 0;
}

</style>
