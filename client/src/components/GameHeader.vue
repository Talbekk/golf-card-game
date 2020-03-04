<template lang="html">
  <div id="game-header">
    <b-button pill v-if="!this.gameStatus && !this.selectScoresPage" v-on:click="newGame" name="button">Play Again?</b-button>
    <score-card v-if="!this.selectScoresPage" :scoreCard="scoreCard"></score-card>
    <b-button pill v-on:click="startNextHole" v-if="checkIfHoleFinished">Next Round</b-button>
  </div>
</template>

<script>
import ScoreCard from './ScoreCard.vue';
import {eventBus} from '../main.js';
import ScoresPage from './ScoresPage.vue';
import IntroScreen from '../views/IntroScreen.vue';
import LeaderboardContainer from '../views/LeaderboardContainer.vue';

export default {
  name: "game-header",
  props: ['gameStatus', 'scoreCard', 'lockedCards', 'counter', 'currentHole'],
  data(){
    return {
      selectScoresPage: false
    }
  },

  components: {
    "score-card": ScoreCard,
    "intro-screen": IntroScreen,
    "leaderboard-container": LeaderboardContainer
  },
  mounted() {
    eventBus.$on('view-leaderboard', () => {
      this.selectScoresPage = !this.selectScoresPage;
    })
  },

  computed: {
    checkIfHoleFinished(){
      return ((this.currentHole >= 1 && (this.counter===4 || this.lockedCards.length === 4) && this.gameStatus === true) ? true : false);
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

b-button {
  /* color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #60a3bc; */
  padding: 15px;
  border-radius: 75px;
  display: inline-block;
  /* border: none;
  transition: all 0.4s ease 0s; */
}

</style>
