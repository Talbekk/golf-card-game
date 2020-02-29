<template lang="html">
  <div class="">
  <div id="intro-screen" v-if="!selectScoresPage">
    <game-rules></game-rules>
   <div id="name-box" v-if="!newGame">
     <h4>Please enter the name of your golfer:</h4>
     <form id="user-name" v-on:submit.prevent="handleClick">
       <input id="username" type="text" name="username" v-model='userName' required>
       <input id="submit" type="submit" value="Tee Off">
      </form>
  </div>
    <button v-if='newGame' v-on:click='clickedDealCards'>Tee Off</button>
  </div>
  <div id="score-container">
  <scores-page v-if='selectScoresPage'></scores-page>
  <button v-if="!selectScoresPage" v-on:click="seeScoresPage">Leaderboard</button>
  <button v-if="selectScoresPage" v-on:click="seeScoresPage">Back</button>
  </div>
    </div>
</template>

<script>
import {eventBus} from '../main.js';
import ScoresPage from './ScoresPage.vue';
import GameRules from './GameRules.vue';

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
    "game-rules": GameRules
  },
  methods: {
    clickedNewGame(){
      eventBus.$emit('clicked-new-game');
    },
    handleClick(){
      eventBus.$emit('username-selected', this.userName);
      this.clickedNewGame();
    },
    seeScoresPage(){
      this.selectScoresPage = !this.selectScoresPage;
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
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #60a3bc;
  padding: 20px;
  border-radius: 75px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  margin-top: 15px;
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
