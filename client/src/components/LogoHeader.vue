<template lang="html">
  <div id="logo-header">
    <b-navbar toggleable="lg" variant="faded" type="light">
      <b-navbar-brand href="#">
        <img src="../assets/GameLogo.svg" height="80" alt=""/>
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
        <b-nav-item v-if="gameStatus" right>Current Score: {{this.score}}</b-nav-item>
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
import ScoresPage from './scores/ScoresPage.vue';
import GameRules from '../views/GameRules.vue';
import ScoreCard from './scores/ScoreCard.vue';

export default {
  name: "logo-header",
  data(){
    return{
      loggedIn: false,
      score: 0,
      currentHole: 1,
    }
  },
  props:['gameStatus', 'scoreCard', 'gameMode'],
  components: {
    'scores-page': ScoresPage,
    'game-rules': GameRules,
    'score-card': ScoreCard
  },
  mounted(){
    eventBus.$on('total', (total) => {
      this.score = total;
    }),
    // eventBus.$on('finished-hole', (hole) => {
    //   console.log("finished hole", hole);
    //   this.currentHole = hole;
    // })
    eventBus.$on('start-next-hole', () => {
      // if(this.scoreCard.length > 1){
      this.currentHole+=1;
    // }
    }),
    eventBus.$on('start-new-game', () => {
      this.currentHole = 1;
      this.score = 0;
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
      eventBus.$emit('start-new-game', this.gameMode);
      this.score = 0;
      this.currentHole = 1;
    },
    reset(){
      eventBus.$emit('reset-app');
      this.score= 0;
      this.currentHole = 1;
    }
  }
}
</script>

<style lang="css" scoped>

#logo-header {
  color: #fff;
  padding: 1rem 1rem;
}

.nav-item {
  font-weight: 700;
  color: #fff;
  font-size: 1.5rem;
  margin-left: .5rem;
  border-left: 2px solid #000;
  padding: 0;
  margin: 0;
}

b-navbar {padding: 0;}

</style>
