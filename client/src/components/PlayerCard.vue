<template lang="html">
  <li v-if="">
    <img class="card-icon" v-if="hidden" v-on:click="showCard" src="../assets/CardBack.png"/>
    <img class="card-icon" v-if="!hidden" :src="this.playerCard.image"/>
    <div id="button-container" v-if="!lockedIn">
      <b-button pill type="button" v-on:click="lockCard" name="button">LOCK</b-button>
      <b-button pill type="button" v-on:click="switchCard" name="button">SWITCH</b-button>
    </div>
  </li>
</template>

<script>

import {eventBus} from '../main.js';

export default {
  name: 'player-card',
  props: ['playerCard', 'shownCards', 'lockedCards', 'counter'],
  data () {
    return {
      hidden: true,
      lockedIn: false
    }
  },
  watch: {
    lockedCards(){
      if (this.lockedCards.length === 0){
        this.resetCard();
      }
    }
  },
  methods: {
    showCard() {
      if (this.shownCards < 2 && this.counter === 0){
        this.hidden = false;
        setTimeout(()=> { this.hideCard() },2000);
        eventBus.$emit('shown-a-card', 1);
      }
    },
    revealCard() {
      if(this.lockedIn === false){
        this.hidden = true;
      } else {
        this.hidden = false;
      }
    },
    hideCard(){
      if (this.lockedIn === false){
      this.hidden = true;
    }
    },
    lockCard() {
      eventBus.$emit('card-value', this.playerCard)
      this.lockedIn = true;
      this.revealCard();
    },
    switchCard() {
      eventBus.$emit('player-card', this.playerCard)
      this.lockedIn = true;
      this.revealCard();
    },
    resetCard(){
      this.hidden = true;
      this.lockedIn = false;
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
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 80px 80px;
  grid-gap: 10px;
}

.card-icon {
  margin-left: auto;
  margin-right: auto;
  max-width: 8em;
  max-height: 10em;
  padding: 1.5em;

}

</style>
