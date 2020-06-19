<template lang="html">
  <div id="cards-container">
    <p>Computer</p>
  </div>
</template>

<script>
import {eventBus} from '../../main.js';
import PlayerCard from '../PlayerCard.vue';

export default {
  name: 'computers-cards',
  props: ['computerCards', 'lockedCards', 'counter', 'topCardSelected'],
  data() {
      return {
          shownCards: 0
      }
  }
}
</script>

<style lang="css" scoped>
</style>
