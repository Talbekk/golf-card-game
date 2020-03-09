<template lang="html">
  <div id="cards-container">
    <!-- <p>Player: {{this.userData.username}}</p> -->
    <ul>
      <player-card v-for="(playerCard, index) in playerCards" :playerCard='playerCard' :key='index' :index='index' :shownCards='shownCards' :lockedCards='lockedCards' :counter='counter' :topCardSelected='topCardSelected'></player-card>
    </ul>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import PlayerCard from './PlayerCard.vue';

export default {
  name: 'players-cards',
  props: ['playerCards', 'lockedCards', 'counter', 'topCardSelected', 'userData'],
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: auto;
  margin-right: auto;
  grid-row-gap: 2px;
  padding-inline-start: 0px;
  list-style-type: none;
}

</style>
