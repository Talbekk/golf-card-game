<template lang="html">
  <div>
    <ul>
      <player-card v-for="(playerCard, index) in playerCards" :playerCard='playerCard' :key='index' :shownCards='shownCards' :lockedCards='lockedCards' :counter='counter'></player-card>
    </ul>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import PlayerCard from './PlayerCard.vue';

export default {
  name: 'players-cards',
  props: ['playerCards', 'lockedCards', 'counter'],
  data () {
    return {
      shownCards: 0
    }
  },
  mounted(){
    eventBus.$on('shown-a-card', (number) => {
    this.shownCards+= number;
    });
  },
  components: {
    "player-card": PlayerCard
  },
  watch: {
    lockedCards() {
    if (this.lockedCards.length === 0){
      this.shownCards = 0;
    }
  }
  }
}
</script>

<style lang="css" scoped>

ul {
  max-width: 75%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

</style>
