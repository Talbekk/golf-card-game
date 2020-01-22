<template lang="html">
  <li>
    <img class="card-icon" v-if="hidden" v-on:click="revealCard" src="../assets/CardBack.png"/>
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
  props: ['playerCard'],
  data () {
    return {
      hidden: true,
      lockedIn: false
    }
  },
  methods: {
  revealCard() {
    if(this.lockedIn === false){
    this.hidden = false;
  }
  },
  lockCard() {
    console.log('lockCard', this.playerCard)
    eventBus.$emit('card-value', this.playerCard)
    this.revealCard();
    this.lockedIn = true;
  },
  switchCard() {
    console.log('switchCard', this.playerCard)
  eventBus.$emit('player-card', this.playerCard)
  this.lockCard();
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
  max-width: 15em;
  max-height: 15em;
  padding: 2em;
}
</style>
