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
      <a href="#" class="reset-game-symbol">
        <font-awesome-icon :icon="['fas', 'redo']" />
      </a>
      <a href="#" class="exit-game-symbol">&times;</a>
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
  props: ['gameStatus', 'scoreCard', 'lockedCards', 'counter', 'currentHole', 'gameMode'],
  data(){
    return {
      selectScoresPage: false,
      modalShow: false,
      currentHole: 1
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
}
},
  methods: {
    startNextHole(){
      eventBus.$emit('start-next-hole');
    },
    newGame(){
      eventBus.$emit('start-new-game', this.gameMode);
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
 background-color: #004225;
 color: #fff;
 align-items: center;
}

.game-header-left {
  justify-self: center;
  display: grid;
  justify-items: flex-start; 
  font-size: 2rem;
  font-weight: 700;
}

.flag-number {
  margin-right: 2.5rem;
}

.game-header-right{
  justify-self: end;
  margin-right: 1rem;
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
  font-size: 2rem;
  text-decoration: none;
  transition: all .2s;
  background-color: #fff;
  color: #004225;
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
