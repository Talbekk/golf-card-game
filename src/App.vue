<template>
  <div id="app">
    <h3>Golf: The Card Game</h3>
    <div id="header">
      <!-- <button v-on:click="getCards">Deal Cards</button> -->
      <button v-on:click="newGame">New Game</button>
      <p v-if="playerCards"><b>Score: {{ this.runningTotal }}</b></p>
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
      lockedCards: []
    }
  },
  components: {
    "player-cards": PlayerCards,
    "top-card": TopCard
  },
  mounted(){
    eventBus.$on('player-card', (card) => {
      let index = this.playerCards.cards.indexOf(card);
      let switchedCard = this.playerCards.cards.splice(index, 1, this.topCard.cards[0]);
      this.runningTotal += this.calculateScore(this.topCard.cards[0].value);
      this.drawTopCard();
      this.lockedCards.push(this.topCard.cards[0].value);
  }),
  eventBus.$on('card-value', (card) => {
    this.currentCard = card;
  })
},
  watch: {
    currentCard() {
      if (this.lockedCards.includes(this.currentCard.value)){
        this.runningTotal -= this.calculateScore(this.currentCard.value);
      } else {
      this.runningTotal += this.calculateScore(this.currentCard.value);
    }
      this.counter += 1;
      this.drawTopCard();
      this.lockedCards.push(this.currentCard.value);
    },
    playerCards(){
      if (this.topCard === null) {
      this.drawTopCard();
    }
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
    }
  }
}

</script>

<style>

/* html, body {
  height: 100%;
  background-color: green;
} */

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
