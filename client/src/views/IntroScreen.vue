<template lang="html">
  <div id="player-screen-container">
    <div id="left-container">
      <div id="player-profile-container">
      <player-profile v-if="!newGame" :userData='userData' :gamesPlayed='gamesPlayed' :totalScore='totalScore' :averageScore='averageScore' :bestScore='bestScore'/>
      </div>
    <div id="game-modes-container">
      <h3>Game Modes:</h3>
      <ul v-for="(game, index) in gameModes">
        <li>
        <game-mode :game="game"/>
        </li>
    </ul>
    </div>
    </div>
  <div id="game-log-container">
      <game-history :matches='matches'/>
  </div>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import {firebase, auth, db} from '../firebase.js';
import PlayerProfile from '../components/home/PlayerProfile.vue';
import GameMode from '../components/home/GameMode.vue';
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
      bestScore: 0,
      gameModes: [{ mode: "Single Player", holes: [3, 9, 18] }
                  // { mode: "Versus Computer", difficulty: ["easy", "intermediate", "pro"], holes: [3, 9, 18]}
                  // { mode: "Multiplayer"}
                ]
        }
  },
  components: {
    "player-profile": PlayerProfile,
    "game-mode": GameMode,
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
/* 
#intro-screen {
  padding: 8px 5px 12px 5px;
  font-size: 12px;
  display: grid;
  grid-template-columns: 5% 50% 40% 5%;
  grid-template-rows: 10% 80% 10%;
}

#left-container {
    grid-row: 2;
    grid-column: 2;
    display: grid;
    grid-template-rows: 70% 30%;
    justify-items: stretch;
 }

#game-log-container {
  grid-row: 2;
  grid-column: 3;
  border-left: solid #333 1px;
  background-color: #999;
  color: #333;
}

#player-profile-container{
  grid-row: 1; 
}

#game-modes-container {
  grid-row: 2;
  border-top: 1px #333 solid;
  background-color: #999;
  color: #333;
  padding-left: 1em;
  justify-self: center;
}

h4 {
  font-weight: bolder;
  text-decoration: underline;
}

h2 {
  margin-top: 10px;
  padding-left: 10px;
  font-weight: bold;
  color: #fffcfd;
  border: 1px #004225 solid;
  background-color: #004225;
  border-radius: 5px;
  padding: 0.5em;
  box-shadow: 0 30px 80px 10px rgb(0,0,0,0.8);
}

li {
    list-style: none;
} */
</style>
