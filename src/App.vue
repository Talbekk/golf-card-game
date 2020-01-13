<template>
  <div id="app">
    <card></card>
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
      selectedCard: []
    }
  },
  components: {
    "card": Card
  },
  methods: {
    getACard(){
      fetch('https://deckofcardsapi.com/api/deck/22237lie3n1x/draw/?count=1')
      .then(res => res.json())
      .then(cardData => this.selectedCard = cardData)
    }
    },
  mounted(){
    fetch('https://deckofcardsapi.com/api/deck/new/')
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
