<template lang="html">
  <div id="computer-container">
    <p>Computer Score: {{this.computerTotal}}</p>
      <computer-cards :counter='counter' :lockedCards='lockedCards' :computerCards='computerCards' :topCardSelected='topCardSelected'></computer-cards>
  </div>
</template>

<script>
import ComputerCards from './ComputerCards.vue';

export default {
  name: 'computer',
  props:['counter', 'lockedCards', 'computerCards', 'topCardSelected', 'computerTotal'],
  data () {
    return {
    }
  },
  components: {
    "computer-cards": ComputerCards
  }
}
</script>

<style lang="css" scoped>
</style>
