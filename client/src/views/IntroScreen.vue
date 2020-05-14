<template lang="html">
  <div id="intro-screen" v-if="!selectScoresPage">
    <div id="top-container">
      <player-profile v-if="!newGame" :userData='userData' :gamesPlayed='gamesPlayed' :totalScore='totalScore' :averageScore='averageScore' :bestScore='bestScore'/>
    </div>
    <div id="game-modes-container">
      <div id="new-game-container">
        <p><b>Single Player:</b></p>
        <b-button to="/game" v-on:click="clickedNewGame" id="btn-main" type="submit">Tee Off</b-button>
      </div>
      <div id="new-game-container">
         <p><b>Face The Computer:</b></p>
        <b-button to="/game" v-on:click="clickedNewGameComputer" id="btn-main" type="submit">Tee Off</b-button>
      </div>
    </div>
      <!-- <div id="last-game-container">
        <p><b>Last Match:</b></p>
        <match-details
        v-if="this.userData.games"
        :match='this.lastMatch'
        :chosenScoreCard='chosenScoreCard'/>
      </div>
      <match-list :matches='matches'/> -->
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import {firebase, auth, db} from '../firebase.js';
import ScoresPage from '../components/ScoresPage.vue';
import LeaderboardContainer from './LeaderboardContainer.vue';
import ScoreCard from '../components/ScoreCard.vue';
import MatchDetails from '../components/MatchDetails.vue';
import MatchList from '../components/MatchList.vue';
import PlayerProfile from '../components/home/PlayerProfile.vue';

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
      bestScore: 0
    }
  },
  components: {
    "scores-page": ScoresPage,
    "leaderboard-container": LeaderboardContainer,
    "score-card": ScoreCard,
    "match-details": MatchDetails,
    "match-list": MatchList,
    "player-profile": PlayerProfile
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
    clickedNewGame(){
      eventBus.$emit('start-new-game', "single-player");
    },
     clickedNewGameComputer(){
      eventBus.$emit('start-new-game', "versus-computer");
    },
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
  /* margin-left: auto;
  margin-right: auto; */
  padding: 8px 5px 12px 5px;
  font-size: 12px;
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(25rem, 1fr));
  /* justify-content: space-evenly; */
  /* max-width: 95%; */
}

#top-container {
  display: flex;
  justify-content: center;
  max-width: 1400px;
}

#game-modes-container {
  display: flex;
}

#new-game-container {
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 2em;
  border: solid #4b8a4a 1px;
  border-radius: 5px;
  background-color: #4b8a4a;
  background-size: cover;
  color: #333;
  box-shadow: 0 30px 80px 10px rgb(0,0,0,0.8);
  width: 25%;
}

#last-game-container{
  padding: 2em;
  margin: 2em;
  max-width: 70%;
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

</style>
