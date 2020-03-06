<template lang="html">
  <div id="game-header">
    <b-button pill v-if="!this.gameStatus && !this.selectScoresPage" v-on:click="newGame" name="button">Play Again?</b-button>
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
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

b-button {
  padding: 0.5px;
  display: inline-block;
}

</style>
