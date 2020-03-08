<template lang="html">
  <div id="game-header">
    <!-- <score-card v-if="!this.gameStatus && currentHole !== 1" :scoreCard="scoreCard"/></score-card> -->
    <div>
      <b-modal v-model="modalShow" id="my-modal" centered title="Game Result:" ok-only>
        <score-card :scoreCard="scoreCard"/>
      </b-modal>
    </div>
    <b-button pill v-if="!this.gameStatus" v-on:click="newGame" name="button">Play Again?</b-button>
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
      selectScoresPage: false,
      modalShow: true
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
  watch: {
    gameStatus(){
      if(!this.gameStatus){
        this.modalShow = true;
      }
    }
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
    },
    showModal() {
     this.$refs['my-modal'].show()
   },
   hideModal() {
     this.$refs['my-modal'].hide()
   },

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
