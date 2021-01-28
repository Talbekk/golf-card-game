<template lang="html">
  <div class="player-container">
      <p class="player-name">{{this.userData.username}}</p>
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

.player-container {
  display: grid;
  grid-template-rows: repeat(2, min-content);
  border-radius: 1rem;
}

.player-name {
  justify-content: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  padding: .5rem;
  background-color: #004225;
  color: #fff;
}
</style>