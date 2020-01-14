<template>
  <div id="app">
    <div v-if="selectedCard">
    <img class="card-icon" :src="selectedCard.cards[0].image"/>
    <img class="card-icon" :src="selectedCard.cards[1].image"/>
    <img class="card-icon" :src="selectedCard.cards[2].image"/>
    <img class="card-icon" :src="selectedCard.cards[3].image"/>
  </div>
    <button v-on:click="getACard">Deal Cards</button>
    <button v-on:click="newGame">New Game</button>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'app',
  data(){
    return{
      deck: [],
      selectedCard: null,
      topCard: null
    }
  },
  components: {
    "card": Card
  },
  methods: {
    getACard(){
      let deckID = this.deck.deck_id
      fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=4`)
      .then(res => res.json())
      .then(cardData => this.selectedCard = cardData)
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
</style>
