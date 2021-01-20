<template lang="html">
  <div id="game-header">
    <end-game v-if="!this.gameStatus && (this.currentHole===9)" :scoreCard='scoreCard' :gameStatus='gameStatus'/>
    <b-button id="btn-main" v-if="!this.gameStatus" v-on:click="newGame" name="button" variant="dark">Play Again?</b-button>
    <b-button id="btn-main" v-on:click="startNextHole" v-if="checkIfHoleFinished" variant="dark">Next Round</b-button>
  </div>
</template>

<script>
import EndGame from './EndGame.vue';
import {eventBus} from '../../main.js';

export default {
  name: "game-header",
  props: ['gameStatus', 'scoreCard', 'lockedCards', 'counter', 'currentHole', 'gameMode'],
  data(){
    return {
      selectScoresPage: false,
      modalShow: false
    }
  },

  components: {
    "end-game": EndGame
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
  if (this.gameMode === "single-player"){
  return ((this.currentHole >= 1 && this.counter===4 && this.lockedCards.length === 4 && this.gameStatus === true) ? true : false);
} else {
   return ((this.currentHole >= 1 && this.counter===8 && this.lockedCards.length === 4 && this.gameStatus === true) ? true : false);
}
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
