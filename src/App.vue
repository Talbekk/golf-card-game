<template>
  <div id="app">
    <h3>Golf: The Card Game</h3>
    <div id="header">
      <button v-on:click="newGame" v-if="this.currentHole > 1 && this.counter===0">Next Round</button>
      <!-- <button v-if="" v-on:click="getCards">Deal Cards</button> -->
      <button v-if="currentHole===9 || !playerCards" v-on:click="newGame">New Game</button>
      <score-card :scoreCard="scoreCard"></score-card>
    </div>
    <div id="board-one">
      <img class="card-icon" v-on:click="drawTopCard" src="./assets/CardBack.png"/>
      <top-card v-if='topCard' :topCard='topCard'></top-card>
    </div>
    <div v-if="playerCards">
      <player-cards :playerCards='playerCards'></player-cards>
    </div>
  </div>
</template>

<script>

import {eventBus} from './main.js';
import TopCard from './components/TopCard.vue';
import PlayerCards from './components/PlayerCards.vue';
import ScoreCard from './components/ScoreCard.vue';

export default {
  name: 'app',
  data() {
    return {
      deck: [],
      playerCards: null,
      topCard: null,
      currentCard: null,
      runningTotal: 0,
      counter: 0,
      currentHole: 1,
      lockedCards: [],
      scoreCard: []
    }
  },
  components: {
    "player-cards": PlayerCards,
    "top-card": TopCard,
    "score-card": ScoreCard
  },
  mounted(){
    eventBus.$on('player-card', (card) => {
      let index = this.playerCards.cards.indexOf(card);
      let currentTopCard = this.topCard.cards[0];
      let switchedCard = this.playerCards.cards.splice(index, 1, currentTopCard);
      this.runningTotal += this.calculateScore(currentTopCard.value);
      this.nextRound(currentTopCard.value)
  }),
  eventBus.$on('card-value', (card) => {
    this.currentCard = card;
  })
},
  watch: {
    currentCard() {
      let cardValue = this.currentCard.value;
      let amount = this.calculateScore(cardValue);
      // if (cardValue !== "5") {
      if (this.lockedCards.includes(cardValue)) {
        this.runningTotal -= amount;
      } else {
      this.runningTotal += amount;
    // }
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
    this.nextHole();
    }
  }
  },
  computed: {
    holesCompleted(){
      return this.scoreCard.length;
    }
  },
  methods: {
    getCards(){
      let deckID = this.deck.deck_id;
      fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=4`)
      .then(res => res.json())
      .then(cardData => this.playerCards = cardData)
    },
    newGame(){
      this.setupGame();
      fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json())
      .then(deckData => this.deck = deckData)
      .then(setTimeout( () =>
      { this.getCards() }, 1000))
    },
    drawTopCard(){
      if (this.playerCards) {
      let deckID = this.deck.deck_id;
      fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
      .then(res => res.json())
      .then(cardData => this.topCard = cardData)
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
    nextHole(){
      this.counter = 0;
      this.runningTotal = 0;
      this.currentHole += 1;
    },
    nextRound(value){
      this.counter += 1;
      this.drawTopCard();
      this.lockedCards.push(value);
    }
  }
}

</script>

<style>

/* html, body {
  height: 100%;
  background-color: green;
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
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
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
  max-width: 12em;
  max-height: 12em;
  padding: 2em;
}

</style>
