<template>
  <div id="app">
    <div v-if="selectedCard">
    <img class="card-icon" :src="selectedCard.cards[0].image"/>
    <img class="card-icon" :src="selectedCard.cards[1].image"/>
    <img class="card-icon" :src="selectedCard.cards[2].image"/>
    <img class="card-icon" :src="selectedCard.cards[3].image"/>
  </div>
    <button v-on:click="getACard">Get A Card</button>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'app',
  data(){
    return{
      deck: [],
      selectedCard: null
    }
  },
  components: {
    "card": Card
  },
  methods: {
    getACard(){
      fetch('https://deckofcardsapi.com/api/deck/oa8yyy0x1v1u/draw/?count=4')
      .then(res => res.json())
      .then(cardData => this.selectedCard = cardData)
    }
    },
  mounted(){
    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(res => res.json())
    .then(deckData => this.deck = deckData)
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
