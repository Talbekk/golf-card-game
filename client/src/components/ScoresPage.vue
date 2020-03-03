<template lang="html">
  <div id="leaderboard-container">
    <div id="views-container">
      <b-button pill type="button" v-on:click="setFilter" name="button">{{this.filter ? "Show All Scores" : "Show Best Scores"}}</b-button>
      <b-button pill type="button" v-on:click="seeTable" name="button">{{this.tableFilter ? "Show Legacy" : "Show Current"}}</b-button>
    </div>
    <leaderboard v-if="sortedLeaderBoard && tableFilter" :scores='this.sortedLeaderBoard' :title='newTitle'></leaderboard>
    <leaderboard v-if="sortedScores && !tableFilter" :scores='this.sortedScores' :title='title'></leaderboard>
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

#leaderboard-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 5px 12px 5px;
  font-size: 13px;
  margin-left: auto;
  margin-right: auto;
}

#views-container{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 50px;
}



</style>
