<template lang="html">
  <div id="computer-container">
      <computer-cards v-if='gameMode==="versus-computer"' :counter='counter' :lockedCards='lockedCards' :computerCards='computerCards' :topCardSelected="topCardSelected"></computer-cards>
  </div>
</template>

<script>
import ComputerCards from './CompouterCards.vue';

export default {
  name: 'computer',
  data () {
    return {s
    }
  },
  components: {
    "computer-cards": ComputerCards
  }
}
</script>

<style lang="css" scoped>
</style>
