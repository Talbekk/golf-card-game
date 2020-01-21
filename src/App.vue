<template>
  <div id="app">
    <h3>Golf: The Card Game</h3>
    <div id="header">
      <button v-on:click="getACard">Deal Cards</button>
      <button v-on:click="newGame">New Game</button>
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
      topCard: null
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
      this.drawTopCard();
  })
},
  methods: {
    getACard(){
      let deckID = this.deck.deck_id
      fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=4`)
      .then(res => res.json())
      .then(cardData => this.playerCards = cardData)
    },
    newGame(){
      this.selectedCard = null
      fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json())
      .then(deckData => this.deck = deckData)
    },
    drawTopCard(){
      let deckID = this.deck.deck_id
      fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1`)
      .then(res => res.json())
      .then(cardData => this.topCard = cardData)
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
