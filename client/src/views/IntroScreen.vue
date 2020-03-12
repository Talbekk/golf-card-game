<template lang="html">
  <div id="intro-screen" v-if="!selectScoresPage">
   <div id="profile-container" v-if="!newGame">
     <h5><b>Profile:</b></h5>
     <p><b>Golfer Name:</b> {{this.userData.username}}</p>
     <p><b>Games Played:</b> {{this.gamesPlayed}}</p>
     <p><b>Total Score:</b> {{this.totalScore}}</p>
     <p><b>Average Score:</b> {{this.averageScore}}</p>
     <b-button id="submit" v-on:click="signOut" v-if="loggedIn">Sign Out</b-button>
   </div>
    <div id="new-game-container">
      <p><b>One Player Mode:</b></p>
      <b-button to="/game" v-on:click="clickedNewGame" id="submit" type="submit">Tee Off</b-button>
    </div>
      <match-details
      v-if="this.userData.games"
      :match='this.lastMatch'
      :chosenScoreCard='chosenScoreCard'/>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import {firebase, auth, db} from '../firebase.js';
import ScoresPage from '../components/ScoresPage.vue';
import LeaderboardContainer from './LeaderboardContainer.vue';
import ScoreCard from '../components/ScoreCard.vue';
import MatchDetails from '../components/MatchDetails.vue';

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
      averageScore: 0
    }
  },
  components: {
    "scores-page": ScoresPage,
    "leaderboard-container": LeaderboardContainer,
    "score-card": ScoreCard,
    "match-details": MatchDetails
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
      eventBus.$emit('start-new-game');
    },
    handleClick(){
      eventBus.$emit('username-selected', this.userName);
      this.clickedNewGame();
    },
    async signOut(){
      try{
      const data = await firebase.auth().signOut();
      this.$router.replace({name: 'login'});
      eventBus.$emit("signed-out");
      this.userData = {};
    } catch(err) {
      console.log(err);
    }

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
  }
  })
  }
},
  getLastGame(){
    const matches = Object.values(this.userData.games);
    this.lastMatch = matches.pop();
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
  }

}
}
</script>

<style lang="css" scoped>

#intro-screen{
  margin-left: auto;
  margin-right: auto;
  padding: 8px 5px 12px 5px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 95%;

}

#profile-container{
  border: solid black 1px;
  padding: 2em;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2em;
}

#new-game-container{
  border: solid black 1px;
  padding: 2em;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2em;
}

#last-game-container{
  border: solid black 1px;
  padding: 2em;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2em;
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
