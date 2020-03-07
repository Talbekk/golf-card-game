<template>
  <div id="app">
    <logo-header id="nav-bar" :gameStatus="gameStatus" :scoreCard="scoreCard"></logo-header>
    <router-view :userData="userData" :gameDeck="gameDeck" :userName="userName" :gameStatus="gameStatus"></router-view>
  </div>
</template>

<script>

import IntroScreen from './views/IntroScreen.vue';
import {eventBus} from './main.js';
import {scoreRef} from './firebase.js';
import LogoHeader from './components/LogoHeader.vue';
import Game from './views/Game.vue';

export default {
  name: 'app',
  data() {
    return {
      deck: [],
      gameDeck: [], //game
      gameStatus: false, //game
      tutorialStatus: false,
      userName: null, //game,
      scoreCard: [],
      userData: {}
    }
  },
  components: {
    "intro-screen": IntroScreen,
    "logo-header": LogoHeader,
    "Game": Game
  },
  mounted(){
    this.getDeck();

    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(deckData => this.deck = deckData)
    .then(setTimeout( () => {this.getDeck() }, 1000)),

    eventBus.$on('clicked-new-game', () => {
      setTimeout( () => {eventBus.$emit('start-new-game')}, 1000)
      this.tutorialStatus = true;
    }),
    eventBus.$on('username-selected', (name) => {
      this.userName = name;
    }),
    eventBus.$on('game-status', (value) => {
      this.gameStatus=value;
    }),
    eventBus.$on('reset-app', () => {
      this.gameStatus = false;
      this.tutorialStatus = false;
      this.userName = null;
      this.scoreCard = [];
    }),
    eventBus.$on('user-data', (data) => {
      this.userData = data;
    })
    eventBus.$on('score-card', (card) => {
      this.scoreCard = card;
    })  },
  methods: {
    getDeck(){
      eventBus.$emit('setup-game');
      let deckID = this.deck.deck_id
      fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=52`)
        .then(res => res.json())
        .then(cardData => this.gameDeck = cardData)
    }
  }
}

</script>

<style>

#intro-screen{
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
/*
html, body {
  height: 100%;
  background-color: #55cc44;
} */

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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold;
  text-align: center;
  color: #2c3e50;
}

#header {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

#board-one {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.card-icon {
  max-width: 11em;
  max-height: 11em;
  padding: 2em;
}

#nav-bar{
  margin-bottom: 0;
}

</style>
