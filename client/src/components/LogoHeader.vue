<template lang="html">
  <div id="game-header">
    <b-navbar toggleable="lg" variant="faded" type="light">
      <b-navbar-brand href="#">
        <img src="../assets/GameLogo.svg" height="75" alt=""/>
      </b-navbar-brand>
      <b-navbar-nav>
      <b-nav-item to="/" v-on:click="reset">Home</b-nav-item>
      <b-nav-item v-if="!gameStatus" to="/leaderboard">Leaderboard</b-nav-item>
      <div>
        <b-nav-item v-if="gameStatus" v-b-modal.modal-1>Leaderboard</b-nav-item>
        <b-modal id="modal-1" scrollable title="Leaderboard" ok-only>
          <scores-page/>
        </b-modal>
        </div>
      <b-nav-item v-if="!gameStatus" to="/rules">Rules</b-nav-item>
      <div>
        <b-nav-item v-if="gameStatus" v-b-modal.modal-2>Rules</b-nav-item>
          <b-modal id="modal-2" scrollable title="Rules" ok-only>
            <game-rules/>
          </b-modal>
        </div>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="gameStatus" right>Hole: {{this.currentHole}}</b-nav-item>
        <b-nav-item v-if="gameStatus" right>Current Score: {{this.score}}</b-nav-item>
        <b-nav-item v-if="gameStatus" v-on:click="newGame" href="#" right>Restart Game</b-nav-item>
        <div>
          <b-nav-item v-if="gameStatus" v-b-modal.modal-3>Score Card</b-nav-item>
            <b-modal id="modal-3" scrollable title="Score Card" ok-only>
              <score-card :scoreCard="scoreCard"/></score-card>
            </b-modal>
          </div>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>

import {eventBus} from '../main.js';

import ScoresPage from './ScoresPage.vue';
import GameRules from '../views/GameRules.vue';
import ScoreCard from './ScoreCard.vue';

export default {
  name: "logo-header",
  data(){
    return{
      loggedIn: false,
      score: 0,
      currentHole: 0,
    }
  },
  props:['gameStatus', 'scoreCard'],
  components: {
    'scores-page': ScoresPage,
    'game-rules': GameRules,
    'score-card': ScoreCard
  },
  mounted(){
    eventBus.$on('total', (total) => {
      this.score = total;
    }),
    eventBus.$on('finished-hole', () => {
      this.currentHole+=1;
    })
  },
  watch: {
    scoreCard(){
      let amount = 0;
      if(this.scoreCard.length > 0){
        this.scoreCard.forEach((score) => {
          amount += score;
        })
        this.score = amount;
      }
    }
  },
  methods: {
    newGame(){
      eventBus.$emit('start-new-game');
      this.score = 0;
    },
    reset(){
      eventBus.$emit('reset-app');
      this.score= 0;
    }
  }
}
</script>

<style lang="css" scoped>

.game-logo {
  max-width: 7em;
  max-height: 7em;
  padding-bottom: 2em;
}

#modal-3___BV_modal_body_{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

</style>
