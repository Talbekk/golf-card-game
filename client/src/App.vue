<template lang="html">
  <div class="content-container">
    <logo-header class="nav-bar" :gameStatus="gameStatus" :scoreCard="scoreCard" :gameMode="gameMode"></logo-header>
    <router-view class="page-container" :gameMode="gameMode" :userData="userData" :gameDeck="gameDeck" :userName="userName" :gameStatus="gameStatus"></router-view>
  </div>
</template>

<script>

import {eventBus} from './main.js';
import {auth, db} from './firebase.js';
import LogoHeader from './components/LogoHeader.vue';

export default {
  name: 'app',
  data() {
    return {
      deck: null,
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
    "logo-header": LogoHeader
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
      this.gameStatus = true;
      eventBus.$emit("deal-cards");
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
      this.gameStatus = false;
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
    }) 
    },
    computed: {
       newRoundDeck(){
   
    let deck = []
       this.gameDeck.cards.forEach((card) => {
        deck.push(card);
      })
      return this.shuffleDeck(deck);
    } 
    },
  methods: {
    getDeck(){
      if(this.deck){
      eventBus.$emit('setup-game');   
      let deckID = this.deck.deck_id
      fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=52`)
        .then(res => res.json())
        .then(cardData => this.gameDeck = cardData)
      }
    },
    getUserData(){
      if(auth.currentUser){
        const uid = auth.currentUser.uid;
        db.ref().child('users').child(uid).once("value", (snapshot) => {
        this.userData = snapshot.val();
        })
      }
    },
    shuffleDeck(deck){
      let shuffledDeck = [...deck];
      let newPosition;
      let temp;
      for (let i = shuffledDeck.length-1; i > 0; i --) {
        newPosition = Math.floor(Math.random() * (i+1))
        temp = shuffledDeck[i];
        shuffledDeck[i] = shuffledDeck[newPosition];
        shuffledDeck[newPosition] = temp;
      }
      return shuffledDeck;
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
  box-sizing: inherit;
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

.content-container {
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, min-content);
  background-image: linear-gradient(
      rgba(121, 145, 145, 0.479), rgba(121, 145, 145, 0.479)),
      url("./assets/CourseBackground.jpg");
      background-size: cover;

  background-attachment: fixed;
  height: 100vh;
}

.section-header {
  font-size: 3rem;
  padding: 0.5rem;
  font-weight: 400;
  color: #fff;
  background-color: #004225;
}

.game-header {
  font-size: 4.5rem;
  padding: 1rem .5rem;
  font-weight: 700;
  color: #fff;
  background-color: #004225;
  text-transform: uppercase;
}

.action-btn {
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 500;
  margin: .5rem;
  padding: .5rem;
  transition: all .2s;
}

.action-btn:hover {
   background-color: #aaa;
}

.popup-container {
  display: grid;
  grid-template-rows: min-content 1fr;
  padding: 1rem;
}

.pop-options {
  display: flex;
  justify-content: flex-end;
}

.popup-close-btn {
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  color: red;
  cursor: pointer;
}

table {
  empty-cells: show;
  border-collapse: collapse;
  table-layout: auto;
  font-size: 1.5rem;
  margin: 2rem;
  text-align: center;
}

table, tr, th, td  {
  border: 1px solid black;

}

th {
  padding: 0.5em;
  text-transform: uppercase;
  font-size: 2rem;
  background-color: #004225;
  color: #fff;
}

#btn-main {
  font-size: 2rem;
}
</style>
