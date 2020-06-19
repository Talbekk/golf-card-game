<template lang="html">
  <div id="cards-container">
    <p>Computer</p>
     <ul>
      <computer-card v-for="(computer, index) in computerCards" :computerCard='computerCard' :key='index' :index='index' :shownCards='shownCards' :lockedCards='lockedCards' :counter='counter' :topCardSelected='topCardSelected'></computer-card>
    </ul>
  </div>
</template>

<script>
import {eventBus} from '../../main.js';
import ComputerCard from './ComputerCard.vue';

export default {
  name: 'computers-cards',
  props: ['computerCards', 'lockedCards', 'counter', 'topCardSelected'],
  data() {
      return {
          shownCards: 0
      }
  },
  components: {
      "computer-card": ComputerCard
  }
}
</script>

<style lang="css" scoped>

ul {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: auto;
  margin-right: auto;
  grid-row-gap: 2px;
  padding-inline-start: 0px;
  list-style-type: none;
}

</style>
