<template lang="html">
  <div class="">
  <div id="intro-screen" v-if="!selectScoresPage">
   <div id="name-box" v-if="!newGame">
     <p>Hi {{this.userData.username}}</p>
     <b-form id="user-name" v-on:submit="handleClick">
       <!-- <b-form-group id="username" label="Enter the name of your golfer:">
         <b-form-input id="username" type="text" name="username" v-model='userName' required placeholder="Enter name"/>
       </b-form-group> -->
       <b-button to="/game" v-on:click="clickedNewGame" id="submit" type="submit">Tee Off</b-button>
     </b-form>
     <b-button id="submit" v-on:click="signOut" v-if="loggedIn">Sign Out</b-button>
     <p>{{this.lastMatch.score}}</p>
  </div>
  </div>
    </div>
</template>

<script>
import {eventBus} from '../main.js';
import {firebase, auth, db} from '../firebase.js';
import ScoresPage from '../components/ScoresPage.vue';
import LeaderboardContainer from './LeaderboardContainer.vue';

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
      lastMatch: {}
    }
  },
  components: {
    "scores-page": ScoresPage,
    "leaderboard-container": LeaderboardContainer
  },
  created(){
    firebase.auth().onAuthStateChanged((user) => {
      console.log("created");
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
      console.log("handleclick", this.userName);
      eventBus.$emit('username-selected', this.userName);
      this.clickedNewGame();
    }
  },
    userData(){
        eventBus.$emit('user-data', this.userData)
        .then(() => {
          console.log("hi");
          this.getLastGame();
        })
        console.log("outside");
    },
  mounted() {
    eventBus.$on('view-leaderboard', () => {
      this.selectScoresPage = !this.selectScoresPage;
    })
  },
  methods: {
    clickedNewGame(){
      console.log("start-new-game");
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
      console.log("success log out", data);
    } catch(err) {
      console.log(err);
      console.log("fail");
    }

  },
    getUserData(){
    if(auth.currentUser){
      console.log("getuserData");
    const uid = auth.currentUser.uid;
    db.ref().child('users').child(uid).once("value", (snapshot) => {
    this.userData = snapshot.val();
  })
  .then(() => {
    eventBus.$emit('user-data', this.userData);
    this.getLastGame();
  })
  }
},
  getLastGame(){
    const matches = Object.values(this.userData.games);
    this.lastMatch = matches[0];
    const today = this.getDate();
    console.log("today", today);
    console.log("matches", matches);
    console.log("lastMatch", this.lastMatch);
  },
  getDate() {
  const today = new Date();
  const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  const time = today.getHours() + ":" + today.getMinutes();
  const dateTime = {date: date, time: time};
  return dateTime;
  }
}
}
</script>

<style lang="css" scoped>

#intro-screen{
  margin-left: auto;
  margin-right: auto;
  padding: 8px 5px 12px 5px;
  max-width: 600px;
  font-size: 12px;
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
