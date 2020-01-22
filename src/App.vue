<template>
  <div id="app">
    <h3>Golf: The Card Game</h3>
    <div id="header">
      <button v-on:click="getACard">Deal Cards</button>
      <button v-on:click="newGame">New Game</button>
      <p v-if="playerCards">Score:{{ this.runningTotal }}</p>
    </div>
    <div id="board-one">
      <img class="card-icon" v-on:click="drawTopCard" src="./assets/CardBack.png"/>
      <top-card v-if='topCard' :topCard='topCard'></top-card>
    </div>
    <div v-if="playerCards">
      <player-cards :playerCards = 'playerCards'></player-cards>
    </div>
  </div>
</template>

<script>
import {eventBus} from './main.js'
import TopCard from './components/TopCard.vue'
import PlayerCards from './components/PlayerCards.vue'

export default {
  name: 'app',
  data(){
    return{
      deck: [],
      playerCards: null,
      topCard: null,
      currentCard: null,
      runningTotal: 0
    }
  },
  components: {
    "player-cards": PlayerCards,
    "top-card": TopCard
  },
  mounted(){
    eventBus.$on('player-card', (card) => {
      let index = this.playerCards.cards.indexOf(card);
      this.playerCards.cards.splice(index, 1, this.topCard.cards[0]);
      this.runningTotal += this.calculateScore(this.topCard.cards[0].value);
      this.drawTopCard();
  })
  eventBus.$on('card-value', (card) => {
    this.currentCard = card;
  })
},
  watch: {
    currentCard() {
      this.runningTotal += this.calculateScore(this.currentCard.value)
    }
  // }
  // computed: {
  //   currentScore: function () {
  //     let runningTotal = 0;
  //     eventBus.$on('card-value', (card) => {
  //         this.currentCard = card})
  //         .then(runningTotal += this.calculateScore(this.currentCard.value))
  // for (const currentCard of this.playerCards.cards){
  //   let value = currentCard.value;
  //   if(currentCard.lockedIn){
  //     runningTotal+= this.calculatescore(value);
  //   }
  // }
  // return runningTotal;
// }
  },
  methods: {
    getACard(){
      let deckID = this.deck.deck_id
      fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=4`)
      .then(res => res.json())
      .then(cardData => this.playerCards = cardData)
    },
    newGame(){
      this.playerCards = null;
      this.topCard = null;
      this.runningTotal = 0;
      fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json())
      .then(deckData => this.deck = deckData)
    },
    drawTopCard(){
      let deckID = this.deck.deck_id
      fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
      .then(res => res.json())
      .then(cardData => this.topCard = cardData)
    },
    calculateScore(value){
      switch (value) {
        case "ACE":
        return 1;
        break;
        case "KING":
        return 10;
        break;
        case "QUEEN":
        return 10;
        break;
        case "JACK":
        return 10;
        break;
        default:
        return parseInt(value);
        break;
      }
    }
    }
}

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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

/* #deck {
  padding: 7em;
} */

.card-icon {
  max-width: 15em;
  max-height: 15em;
  padding: 2em;

}
</style>
