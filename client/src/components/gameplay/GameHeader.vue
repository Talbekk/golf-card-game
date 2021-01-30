<template lang="html">
  <div class="game-header-options">
    <div class="game-header-left">
      <div class="flag-number">Hole:
        {{this.currentHole}}
      </div>
    </div>
    <div class="game-header-center">
      <end-game v-if="!this.gameStatus && (this.currentHole===9)" :scoreCard='scoreCard' :gameStatus='gameStatus'/>
      <b-button id="btn-main" v-if="!this.gameStatus && this.gameMode" v-on:click="newGame" name="button" variant="dark">Play Again?</b-button>
      <b-button id="btn-main" v-on:click="startNextHole" v-if="checkIfHoleFinished" variant="dark">Next Round &rarr;</b-button>
    </div>
    <div class="game-header-right">
      <font-awesome-icon class="reset-game-symbol" v-on:click="resetGame" :icon="['fas', 'redo']" />
      <router-link class="exit-game-symbol" to="/"><div v-on:click="quitGame">X</div></router-link>
    </div>
  </div>
</template>

<script>
import EndGame from './EndGame.vue';
import {eventBus} from '../../main.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRedo } from '@fortawesome/free-solid-svg-icons'

library.add(faRedo)


export default {
  name: "game-header",
  props: ['gameStatus', 'scoreCard', 'lockedCards', 'counter', 'currentHole', 'gameMode', 'playerCards', 'computerCards'],
  data(){
    return {
      selectScoresPage: false,
      modalShow: false,
      currentGameMode: ""
    }
  },

  components: {
    "end-game": EndGame
  },
  mounted() {
    eventBus.$on('view-leaderboard', () => {
      this.selectScoresPage = !this.selectScoresPage;
    }),
       eventBus.$on('start-next-hole', () => {
      this.currentHole+=1;
    // }
    }),
       eventBus.$on('start-new-game', () => {
      this.currentHole = 1;
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
},
    gameMode(){
      this.currentGameMode = (this.computerCards.length === 0) 
      ? 
      "single-player" 
      : 
      "versus-computer";
    }
},
  methods: {
    startNextHole(){
      eventBus.$emit('start-next-hole');
    },
    newGame(){
      eventBus.$emit('start-new-game', this.gameMode);
    },
    quitGame(){
      console.log("quit");
      eventBus.$emit('reset-app');
      this.currentHole = 1;
    },
    resetGame(){
       eventBus.$emit('start-new-game', this.currentGameMode);
    }
  }
}
</script>

<style lang="css" scoped>

.game-header-options {
 text-align: center;
 padding: .5rem 0;
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 grid-column-gap: 1rem;
  background-color: #004225;
 color: #fff;
 align-items: center;
}

.game-header-left {
  margin-left: 1rem;
  justify-self: start;
  display: grid;
  justify-items: flex-start; 
  font-size: 2rem;
  font-weight: 700;
}

.game-header-right {
  justify-self: end;
  align-content: center;
  margin: .5rem 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: .5rem;
}

.exit-game-symbol {
  font-size: 3rem;
  text-decoration: none;
  transition: all .2s;
  line-height: 1;
  color: #004225;
  background-color: #fff;
}

.reset-game-symbol {
  padding: .5rem;
  font-size: 3rem;
  text-decoration: none;
  transition: all .2s;
  background-color: #fff;
  color: #004225;
  cursor: pointer;
}


.reset-game-symbol:hover {
  background-color: yellow;
}

.exit-game-symbol:hover {
  background-color: red;
}

b-button {
  padding: 0.5px;
  display: inline-block;
}

</style>
