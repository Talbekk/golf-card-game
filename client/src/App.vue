<template>
  <div class="container">
    <logo-header id="nav-bar" :gameStatus="gameStatus" :scoreCard="scoreCard"></logo-header>
    <router-view :gameMode="gameMode" :userData="userData" :gameDeck="gameDeck" :userName="userName" :gameStatus="gameStatus"></router-view>
    <!-- <app-footer id="footer"></app-footer> -->
  </div>
</template>

<script>

import IntroScreen from './views/IntroScreen.vue';
import {eventBus} from './main.js';
import {scoreRef, auth, db} from './firebase.js';
import LogoHeader from './components/LogoHeader.vue';
import Footer from './components/Footer.vue';
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
      userData: {},
      gameMode: null
    }
  },
  components: {
    "intro-screen": IntroScreen,
    "logo-header": LogoHeader,
    "Game": Game,
    "app-footer": Footer
  },
  mounted(){
    this.getDeck();

    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(deckData => this.deck = deckData)
    .then(setTimeout( () => {this.getDeck() }, 1000)),

    this.getUserData();

    eventBus.$on('clicked-new-game', () => {
      setTimeout( () => {eventBus.$emit('start-new-game')}, 1000)
      this.tutorialStatus = true;
    }),
    eventBus.$on('start-new-game', (mode) => {
      this.gameMode = mode;
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
      this.gameMode = null;
      this.scoreCard = [];
    }),
    eventBus.$on('signed-out', () => {
      this.userData = {};
    }),
    eventBus.$on('register-user', () => {
      this.getUserData();
    }),
    eventBus.$on('signed-in', () => {
      this.getUserData();
    }),
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
    },
    getUserData(){
    if(auth.currentUser){
    const uid = auth.currentUser.uid;
    db.ref().child('users').child(uid).once("value", (snapshot) => {
    this.userData = snapshot.val();
  })
}
}
}
}

</script>

<style>
*,
*::before, 
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html { 
  scroll-behavior: smooth;
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: 'Roboto', sans-serif; 
  color: #555;
  font-weight: 300;
  line-height: 1.6;
}

.container {
  display: grid;
  grid-template-rows: min-content repeat(1fr);
  grid-row-gap: 3rem;
}

.section-header {
  font-size: 3rem;
  padding: 0.5rem;
  font-weight: 400;
  color: #fff;
  background-color: #004225;
}
</style>
