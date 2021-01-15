<template lang="html">
  <div class="player-screen-container">
    <div id="player-profile">
      <h3 class="section-header">Player Profile</h3>
      <player-profile v-if="!newGame" :userData='userData' :gamesPlayed='gamesPlayed' :totalScore='totalScore' :averageScore='averageScore' :bestScore='bestScore'/>
    </div>
    <div class="game-modes">
      <h3 class="section-header">Game Modes</h3>
      <game-mode-list/>
    </div>
    <div class="game-log">
      <h3 class="section-header">Match History</h3>
      <game-history :matches='matches'/>
    </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import {firebase, auth, db} from '../firebase.js';
import PlayerProfile from '../components/home/PlayerProfile.vue';
import GameModeList from '../components/home/GameModeList.vue';
import GameHistory from '../components/home/GameHistory.vue';

export default {
  name: 'intro-screen',
  props: ['viewLeaderBoard'],
  data() {
    return {
      newGame: false,
      userName: null,
      loggedIn: false,
      userData: {},
      lastMatch: {},
      chosenScoreCard: [],
      gamesPlayed: 0,
      totalScore: 0,
      averageScore: 0,
      matches: [],
      bestScore: 0
        }
  },
  components: {
    "player-profile": PlayerProfile,
    "game-mode-list": GameModeList,
    "game-history": GameHistory
  },
  created(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.loggedIn = true;
        this.getUserData();
      } else {
        this.loggedIn = false;
      }
    })
  },
  watch : {
    userName(){
      eventBus.$emit('username-selected', this.userName);
      this.clickedNewGame();
    }
  },
    userData(){
        eventBus.$emit('user-data', this.userData)
        .then(() => {
          this.getLastGame();
        })
    },
  mounted() {
    eventBus.$on('view-leaderboard', () => {
      this.selectScoresPage = !this.selectScoresPage;
    }),
    eventBus.$on('register-user', () => {
      this.getUserData();
    })
  },
  methods: {
    handleClick(){
      eventBus.$emit('username-selected', this.userName);
      this.clickedNewGame();
    },
    getUserData(){
    if(auth.currentUser){
    const uid = auth.currentUser.uid;
    db.ref().child('users').child(uid).once("value", (snapshot) => {
    this.userData = snapshot.val();
  })
  .then(() => {
    eventBus.$emit('user-data', this.userData);
    if(this.userData.games){
    this.getLastGame();
    this.getGamesPlayed();
    this.getTotalScore();
    this.getAverageScore();
    this.getBestScore();
  }
  })
  }
},
  getLastGame(){
    const matchesList = Object.values(this.userData.games);
    this.matches = matchesList;
    const matchesCopy = [...matchesList];
    this.lastMatch = matchesCopy.pop();
    const today = this.getDate();
    this.chosenScoreCard = this.lastMatch.card;
  },
  getDate() {
    const today = new Date();
    const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes();
    const dateTime = {date: date, time: time};
    return dateTime;
  },
  getGamesPlayed(){
    const matches = Object.values(this.userData.games);
    this.gamesPlayed = matches.length;
  },
  getTotalScore(){
    let total = 0;
    const matches = Object.values(this.userData.games);
    matches.forEach((match) => {
      total+= match.score;
    })
    this.totalScore = total;
  },
  getAverageScore(){
    const totalGames = this.gamesPlayed;
    const totalScore = this.totalScore;
    const average = totalScore / totalGames;
    this.averageScore = Math.floor(average);
  },
  getBestScore(){
    let record = 150;
    const matches = Object.values(this.userData.games);
    matches.forEach((match) => {
      if (match.score < record) {
        record = match.score;
      }
    })
    this.bestScore = record;
  }

}
}
</script>

<style lang="css" scoped>

.player-screen-container {
  display: grid;
  grid-template-rows: 1fr min-content;
  grid-template-columns: 1fr min-content;
  border: 1px solid #000;
}

.player-profile {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}

.game-modes {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    border-top: 1px solid #000;
}

.game-log {
  grid-row: 1 / 3;
  grid-column: 2 / 3;
  border-left: 1px solid #000;
}


</style>
