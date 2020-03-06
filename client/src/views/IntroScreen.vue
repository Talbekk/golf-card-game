<template lang="html">
  <div class="">
  <div id="intro-screen" v-if="!selectScoresPage">
   <div id="name-box" v-if="!newGame">
     <b-form id="user-name" v-on:submit="handleClick">
       <b-form-group id="username" label="Enter the name of your golfer:">
         <b-form-input id="username" type="text" name="username" v-model='userName' required placeholder="Enter name"/>
       </b-form-group>
       <b-button to="/game" id="submit" type="submit">Tee Off</b-button>
     </b-form>
     <b-button id="submit" v-on:click="signOut" v-if="loggedIn">Sign Out</b-button>
  </div>
  </div>
    </div>
</template>

<script>
import {eventBus} from '../main.js';
import {firebase} from '../firebase.js';
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
      loggedIn: false
    }
  },
  components: {
    "scores-page": ScoresPage,
    "leaderboard-container": LeaderboardContainer
  },
  created(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.loggedIn = true;
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
  mounted() {
    eventBus.$on('view-leaderboard', () => {
      this.selectScoresPage = !this.selectScoresPage;
    })
  },
  methods: {
    clickedNewGame(){
      eventBus.$emit('clicked-new-game');
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
