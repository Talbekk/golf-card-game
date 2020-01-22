<template lang="html">
  <li>
    <img class="card-icon" v-if="hidden" v-on:click="showCard" src="../assets/CardBack.png"/>
    <img class="card-icon" v-if="!hidden" :src="playerCard.image"/>
    <div id="button-container" v-if="!lockedIn">
    <button type="button" v-on:click="lockCard" name="button">LOCK IN</button>
    <button type="button" v-on:click="switchCard" name="button">SWITCH</button>
    </div>
  </li>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: 'player-card',
  props: ['playerCard', 'shownCards'],
  data () {
    return {
      hidden: true,
      lockedIn: false
    }
  },
  methods: {
    showCard() {
      if (this.shownCards < 2){
      eventBus.$emit('shown-a-card', 1)
      this.revealCard();
      setTimeout(()=> { this.hideCard() },2000);
    }
    },
  revealCard() {
    if(this.lockedIn === false){
    this.hidden = false;
  }
  },
  hideCard(){
    this.hidden = true;
  },
  lockCard() {
    eventBus.$emit('card-value', this.playerCard)
    this.revealCard();
    this.lockedIn = true;
  },
  switchCard() {
  eventBus.$emit('player-card', this.playerCard)
  this.revealCard();
  this.lockedIn = true;
}
}
}
</script>

<style lang="css" scoped>

li {
  display: flex;
  flex-direction: column;
}

#button-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}

.card-icon {
  max-width: 12em;
  max-height: 12em;
  padding: 1em;
}
</style>
