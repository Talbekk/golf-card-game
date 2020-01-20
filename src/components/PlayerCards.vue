<template lang="html">
  <div>
    <ul>
      <player-card v-for="(playerCard, index) in playerCards.cards" :playerCard='playerCard' :key='index'></player-card>
    </ul>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import PlayerCard from './PlayerCard.vue'

export default {
  name: 'players-cards',
  props: ['playerCards'],
  methods: {
    getACard(){
      eventBus.$emit('Select a card', this.card);
    }
  },
  components: {
    "player-card": PlayerCard
  }
}
</script>

<style lang="css" scoped>

ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
