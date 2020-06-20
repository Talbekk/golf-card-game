<template lang="html">
  <div id="computer-container">
      <computer-cards :counter='counter' :lockedCards='lockedCards' :computerCards='computerCards' :topCardSelected='topCardSelected'></computer-cards>
  </div>
</template>

<script>
import ComputerCards from './ComputerCards.vue';

export default {
  name: 'computer',
  props:['counter', 'lockedCards', 'computerCards', 'topCardSelected'],
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
