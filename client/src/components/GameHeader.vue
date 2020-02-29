<template lang="html">
  <div id="game-header">
    <button v-if="!this.gameStatus" v-on:click="newGame" name="button">Play Again?</button>
    <button v-if="this.gameStatus" v-on:click="newGame" name="button">Restart</button>
    <score-card :scoreCard="scoreCard"></score-card>
    <button v-on:click="startNextHole" v-if="checkIfHoleFinished">Next Round</button>
    <button v-if="!this.gameStatus" name="button">Leaderboard</button>
    <intro-screen :viewLeaderboard="viewLeaderboard"></intro-screen>
  </div>
</template>

<script>
import ScoreCard from './ScoreCard.vue';
import {eventBus} from '../main.js';
import ScoresPage from './ScoresPage.vue';
import IntroScreen from './IntroScreen.vue';

export default {
  name: "game-header",
  props: ['gameStatus', 'scoreCard', 'lockedCards', 'counter', 'currentHole'],
  data(){
    return {
      selectScoresPage: false.
      newGame
    }
  }

  components: {
    "score-card": ScoreCard,
    "intro-screen", IntroScreen
  },

  computed: {
    checkIfHoleFinished(){
      return ((this.currentHole >= 1 && this.counter===4 && this.lockedCards.length === 4 && this.gameStatus === true) ? true : false);
  }
},
  methods: {
    startNextHole(){
      eventBus.$emit('start-next-hole');
    },
    newGame(){
      eventBus.$emit('start-new-game');
    }

  }
}
</script>

<style lang="css" scoped>

#game-header {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 75%;
}

button {
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #60a3bc;
  padding: 15px;
  border-radius: 75px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
}

</style>
