<template>
  <div id="app">
    <card></card>
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
