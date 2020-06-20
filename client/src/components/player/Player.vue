<template lang="html">
  <div id="player-container">
    <p>{{this.userData.username}}</p>
      <player-cards :counter='counter' :lockedCards='lockedCards' :playerCards='playerCards' :topCardSelected="topCardSelected" :userData="userData"></player-cards>
  </div>
</template>

<script>
import PlayerCards from './PlayerCards.vue';
export default {
  name: 'player',
  props:['counter', 'lockedCards', 'playerCards', 'topCardSelected', 'userData'],
  data () {
    return {
    }
  },
  components: {
    "player-cards": PlayerCards
  }
}
</script>

<style lang="css" scoped>
</style>