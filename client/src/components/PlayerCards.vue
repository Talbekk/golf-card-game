<template lang="html">
  <div id="cards-container">
      <draggable id="player-cards" :list="playerCards" :group="{ name: 'cards', pull: 'clone', put: false }" @change="log">
        <player-card v-for="(playerCard, index) in playerCards" :key='index' :playerCard='playerCard' :index='index' :shownCards='shownCards' :lockedCards='lockedCards' :counter='counter'></player-card>
      </draggable>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import PlayerCard from './PlayerCard.vue';
import draggable from 'vuedraggable';

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
    "player-card": PlayerCard,
    draggable
  },
  watch: {
    lockedCards() {
    if (this.lockedCards.length === 0){
      this.shownCards = 0;
    }
  }
},
methods: {
  log: function (evt) {
window.console.log(evt);
}
}
}
</script>

<style lang="css" scoped>

#player-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  grid-row-gap: 10px;
}

</style>
