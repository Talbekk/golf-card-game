<template lang="html">
  <div>
    <ul>
      <player-card v-for="(playerCard, index) in playerCards" :playerCard='playerCard' :key='index' :shownCards='shownCards' :lockedCards='lockedCards'></player-card>
    </ul>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import PlayerCard from './PlayerCard.vue';

export default {
  name: 'players-cards',
  props: ['playerCards', 'lockedCards'],
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
