<template>
  <div id="app">
    <h3>Golf: The Card Game</h3>
    <div id="header">
      <button v-on:click="getACard">Deal Cards</button>
      <button v-on:click="newGame">New Game</button>
    </div>
    <div v-if="playerCards">
      <player-cards :playerCards = 'playerCards'></player-cards>
    </div>
  </div>
</template>

<script>
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
    "player-cards": PlayerCards
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
</style>
