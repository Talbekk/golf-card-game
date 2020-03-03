<template lang="html">
  <div class="">
  <div id="intro-screen" v-if="!selectScoresPage">
    <game-rules></game-rules>
   <div id="name-box" v-if="!newGame">
     <b-form id="user-name" v-on:submit.prevent="handleClick">
       <b-form-group id="username" label="Enter the name of your golfer:">
         <b-form-input id="username" type="text" name="username" v-model='userName' required placeholder="Enter name"/>
       </b-form-group>
       <b-button id="submit" type="submit">Tee Off</b-button>
     </b-form>
  </div>
  </div>
  <div id="score-container">
    <leaderboard-container :selectScoresPage="selectScoresPage"></leaderboard-container>
  </div>
    </div>
</template>

<script>
import {eventBus} from '../main.js';
import ScoresPage from './ScoresPage.vue';
import GameRules from './GameRules.vue';
import LeaderboardContainer from './LeaderboardContainer.vue';

export default {
  name: 'intro-screen',
  props: ['viewLeaderBoard'],
  data() {
    return {
      newGame: false,
      userName: null,
      selectScoresPage: false
    }
  },
  components: {
    "scores-page": ScoresPage,
    "game-rules": GameRules,
    "leaderboard-container": LeaderboardContainer
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
    }
    // seeScoresPage(){
    //   this.selectScoresPage = !this.selectScoresPage;
    // }
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

#score-container {
  margin-left: auto;
  margin-right: auto;
  padding: 8px 5px 12px 5px;
  max-width: 600px;
  font-size: 13px;
}

#username{
  padding: 10px;
}

</style>
