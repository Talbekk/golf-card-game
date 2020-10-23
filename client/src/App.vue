<template>
  <div id="app">
    <logo-header id="nav-bar" :gameStatus="gameStatus" :scoreCard="scoreCard"></logo-header>
    <router-view :gameMode="gameMode" :userData="userData" :gameDeck="gameDeck" :userName="userName" :gameStatus="gameStatus"></router-view>
  </div>
</template>

<script>

import IntroScreen from './views/IntroScreen.vue';
import {eventBus} from './main.js';
import {scoreRef, auth, db} from './firebase.js';
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
      userData: {},
      gameMode: null
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html { scroll-behavior: smooth; }

html, body {

  height: 100%;
  background-color: #fff;
  color: #555555;
  font-size: 16px;
  font-weight: 400;
  background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('./assets/CourseBackground.jpg');
  background-size: cover;
  height: 100vh;
  background-position: center;
  background-attachment: fixed;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
}

#app {
  font-family: 'Roboto', 'Arial', sans-serif;
}

#intro-screen{
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
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

#nav-bar{
  margin-bottom: 0;
  background-size: cover;
  font-size: 150%;
}

/* BUTTONS */

#btn-main,
#btn-main:link,
#btn-main:visited {
  background: #004225;
  box-shadow: 4px 3px 10px 1px rgb(0,0,0,0.8);
  border: 1px solid #004225;
}

#btn-main:hover,
#btn-main:active {
  background: #005611;
  box-shadow: 4px 3px 10px 1px rgb(0,0,0,0.8);
  border: 1px solid #005611;
}

/* HEADINGS */

#login-heading {
  font-size: 200%;
  display: flex;
  justify-content: center;
}

.modal-content {
  background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('./assets/CourseBackground.jpg');
  /* background-size: cover; */
  /* height: 100vh; */
  background-position: center;
  background-attachment: fixed;
  text-rendering: optimizeLegibility;
  /* overflow-x: hidden; */
  background-color: #4b8a4a;
  border: none;
}

.modal-header {
  border-bottom: none !important;
  background: #777;
}

.modal-footer {
  border-top: none !important;
  background: #777;
}

.btn-primary ,
.btn-primary :link,
.btn-primary :visited {
  background: #444 !important;
  border: 1px solid #444 !important;
}

.btn-primary :hover,
.btn-primary :active {
  background: #555 !important;
  border: 1px solid #444 !important;
}



</style>
