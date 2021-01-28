<template lang="html">
  <div id="player-card-container">
    <li>
    <img class="card-icon" v-if="hidden" src="../../assets/CardBack.png"/>
    <img class="card-icon" v-if="!hidden" :src="this.computerCard.image"/>
  </li>
</div>
</template>

<script>

import {eventBus} from '../../main.js';

export default {
  name: 'computer-card',
  props: ['computerCard', 'shownCards', 'lockedCards', 'counter', 'topCardSelected'],
  data () {
    return {
      hidden: true,
      lockedIn: false,
      popoverShow: false,
    }
  },
  mounted() {
    eventBus.$on("computer-card-reveal", (card) => {
      if(card === this.computerCard) {
       setTimeout(function() {this.hidden = false } , 1000);
      }
    })
  },
  watch: {
    lockedCards(){
      if (this.lockedCards.length === 0){
        this.resetCard();
      }
    },
    computerCard(){
        if (this.computerCard.lockedIn === true){
        this.hidden = false;
      } else {
        this.hidden = true;
      }
    }
  },
  methods: {
    resetCard(){
      this.hidden = true;
      this.lockedIn = false;
    }
  }
}
</script>

<style lang="css" scoped>

#player-card-container {
  padding: 0.5em;
}


.card-icon {
  margin-left: auto;
  margin-right: auto;
  max-width: 10em;
  max-height: 10em;
}

</style>
