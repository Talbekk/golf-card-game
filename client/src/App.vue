<template>
  <div id="app">
    <h3>Golf: The Card Game</h3>
    <div id="intro-container">
      <intro-screen v-if="!tutorialStatus"></intro-screen>
    </div>
    <div id="header" v-if="tutorialStatus">
      <button v-on:click="nextHole" v-if="checkIfHoleFinished">Next Round</button>
      <button v-if="!gameStatus" v-on:click="setupNewGame" name="button">Play Again?</button>
      <score-card :scoreCard="scoreCard"></score-card>
    </div>
    <div id="board-one" v-if="tutorialStatus">
      <discard-pile v-if='discardPile' :discardPile='discardPile'></discard-pile>
      <card-deck></card-deck>
      <top-card v-if='topCard' :topCard='topCard'></top-card>
    </div>
    <div v-if="playerCards">
      <player-cards :counter='counter' :lockedCards='lockedCards' :playerCards='playerCards'></player-cards>
    </div>
  </div>
</template>

<script>

import IntroScreen from './components/IntroScreen.vue';
import DiscardPile from './components/DiscardPile.vue';
import {eventBus} from './main.js';
import TopCard from './components/TopCard.vue';
import PlayerCards from './components/PlayerCards.vue';
import ScoreCard from './components/ScoreCard.vue';
import CardDeck from './components/CardDeck.vue';
import {scoreRef} from './firebase.js';

export default {
  name: 'app',
  data() {
    return {
      deck: [],
      gameDeck: [],
      roundDeck: [],
      playerCards: null,
      topCard: null,
      currentCard: null,
      runningTotal: 0,
      counter: 0,
      currentHole: 1,
      lockedCards: [],
      scoreCard: [],
      discardPile: [],
      drawnCard: false,
      gameStatus: true,
      tutorialStatus: false,
      userName: null
    }
  },
  components: {
    "player-cards": PlayerCards,
    "top-card": TopCard,
    "score-card": ScoreCard,
    "discard-pile": DiscardPile,
    "intro-screen": IntroScreen,
    "card-deck": CardDeck
  },
  mounted(){

    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(deckData => this.deck = deckData)
    .then(setTimeout( () => {this.getDeck() }, 1000)),

    eventBus.$on('player-card', (card) => {
      let index = this.playerCards.indexOf(card);
      let currentTopCard = this.topCard;
      let switchedCard = this.playerCards.splice(index, 1, currentTopCard);
      let matchingCardValues = this.lockedCards.filter(card =>
        currentTopCard.value === card)
      if (matchingCardValues.length === 3){
          this.runningTotal = -30;
      } else if(matchingCardValues.length === 1 & currentTopCard.value === "5"){
        this.runningTotal += this.calculateScore(currentTopCard.value);
      } else if (matchingCardValues.length === 1) {
        this.runningTotal -= this.calculateScore(currentTopCard.value);
      } else {
        this.runningTotal += this.calculateScore(currentTopCard.value);
      }
      this.nextRound(currentTopCard.value);
      this.discardPile.push(switchedCard);
      this.counter += 1;
    }),
    eventBus.$on('card-value', (card) => {
      this.currentCard = card;
      this.counter += 1;
    }),
    eventBus.$on('clicked-new-game', () => {
      this.getCards();
      this.tutorialStatus = true;
    }),
    eventBus.$on('draw-next-card', () => {
      this.drawNextCard();
    }),
    eventBus.$on('username-selected', (name) => {
      this.userName = name;
  })
},
  watch: {
    currentCard() {
      let cardValue = this.currentCard.value;
      let amount = this.calculateScore(cardValue);
      let matchingCardValues = this.lockedCards.filter(card => cardValue === card)
      console.log("cardvalues", matchingCardValues);
      if (matchingCardValues.length === 3){
          this.runningTotal = -30;
      }
        else if(matchingCardValues.length === 1 & cardValue === "5"){
        this.runningTotal += amount;
      } else if (matchingCardValues.length === 1) {
        this.runningTotal -= amount;
      } else {
          this.runningTotal += amount;
      }
      this.nextRound(cardValue);
    },
    playerCards(){
      if (this.topCard === null) {
      this.drawTopCard();
    }
  },
  counter(){
    if (this.counter === 4){
      this.scoreCard.push(this.runningTotal);
    }
  },
  scoreCard(){
    if (this.scoreCard.length === 9){
      let gameTotal = this.getTotalScore();
      scoreRef.push({golfer: this.userName, score: gameTotal, card: this.scoreCard, edit: false});
      this.gameStatus = false;
    }
  }
},
  computed: {
    holesCompleted(){
      return this.scoreCard.length;
    },
  checkIfHoleFinished(){
    return ((this.currentHole >= 1 && this.counter===4 && this.lockedCards.length === 4 && this.gameStatus === true) ? true : false);
  }
},
  methods: {
    getRoundDeck(){
      this.gameDeck.cards.forEach((card) => {
        this.roundDeck.push(card);
      })
      return this.shuffleDeck(this.roundDeck);
    },
    shuffleDeck(deck){
      let newPosition;
      let temp;
      for (let i = deck.length-1; i > 0; i --) {
        newPosition = Math.floor(Math.random() * (i+1))
        temp = deck[i];
        deck[i] = deck[newPosition];
        deck[newPosition] = temp;
      }
    },
    getCards(){
      this.getRoundDeck();
      let hand = [];
      for (let counter = 0; counter < 4; counter++){
        let card = this.roundDeck.shift();
        hand.push(card);
      }
      this.playerCards = hand;
      this.playerCards.forEach((card) => {
        card.lockedIn = false;
      })
    },
    getDeck(){
      this.setupGame();
      let deckID = this.deck.deck_id
      fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=52`)
        .then(res => res.json())
        .then(cardData => this.gameDeck = cardData)
    },
    drawTopCard(){
      if (this.playerCards) {
        this.topCard = this.roundDeck.shift();
      }
    },
    calculateScore(value){
      switch (value) {
        case "ACE":
        return 1;
        break;
        case "KING":
        return 0;
        break;
        case "QUEEN":
        return 10;
        break;
        case "JACK":
        return 10;
        break;
        case "5":
        return -5;
        default:
        return parseInt(value);
        break;
      }
    },
    setupGame(){
      this.playerCards = null;
      this.topCard = null;
      this.runningTotal = 0;
      this.lockedCards = [];
    },
    setupNewGame(){
      this.setupGame();
      this.scoreCard = [];
      this.counter = 0;
      this.currentHole = 0;
      this.roundDeck = [];
      this.getCards();
      this.gameStatus = true;
    },
    nextHole(){
      this.counter = 0;
      this.currentHole += 1;
      this.roundDeck = [];
      this.setupGame();
      this.getCards();
      this.discardPile = [];
    },
    nextRound(value){
      this.drawTopCard();
      this.drawnCard = false;
      this.lockedCards.push(value);
    },
    drawNextCard(){
      if (this.drawnCard === false){
      this.drawTopCard();
      this.drawnCard = true;
    }
  },
  getTotalScore() {
    let counter = 0;
     this.scoreCard.forEach((score) => {
       counter += score;
    })
    return counter;
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

/* html, body {
  height: 100%;
  background-color: ;
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
  margin-top: 60px;
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

</style>
