<template lang="html">
  <div id="intro-screen" v-if="!selectScoresPage">
    <h2>Player Profile:</h2>
    <div id="top-container">
      <player-profile v-if="!newGame" :userData='userData' :gamesPlayed='gamesPlayed' :totalScore='totalScore' :averageScore='averageScore' :bestScore='bestScore'/>
    </div>
    <h2>Game Modes:</h2>
    <div id="game-modes-container">
      <ul v-for="(game, index) in gameModes">
        <li>
        <game-mode :game="game"/>
        </li>
    </ul>
  </div id="game-log-container">
    <h2>Game Log:</h2>
    <div id="last-game-container">
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
      selectScoresPage: false,
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
                  // { mode: "Versus Computer", difficulty: ["easy", "intermediate", "pro"], holes: [3, 9, 18]},
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

#intro-screen {
  padding: 8px 5px 12px 5px;
  font-size: 12px;
  display: flex;
  align-items: center;
}

#top-container {
  display: flex;
}

#game-modes-container {
  display: flex;
  justify-content: center;
}


#last-game-container{
  padding: 2em;
  margin: 2em;
  border: solid #4b8a4a 1px;
  border-radius: 5px;
  background-color: #4b8a4a;
  background-size: cover;
  color: #333;
  box-shadow: 0 30px 80px 10px rgb(0,0,0,0.8);
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
  /* grid-gap: 1em;
  grid-auto-rows: minmax(100px, auto);
  grid-auto-columns: minmax(100px, auto);
  width: 50%;
  margin: 2em; */
}

#name-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h4 {
  font-weight: bolder;
  text-decoration: underline;
}

h2 {
  margin-top: 10px;
  padding-left: 10px;
  font-weight: bold;
  color: #000;
}

#submit {
  text-decoration: none;
  padding: 15px;
  border-radius: 75px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  margin-top: 5px;
}

#user-name {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
}

#username{
  padding: 10px;
}

li {
    list-style: none;
}

</style>
