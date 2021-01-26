<template lang="html">
<div class="deck-container">
  <h5 class="game-sub-section-header">Deck</h5>
  <img v-bind:class="[topCardStatus ? selectedClass : unSelectedClass]" v-on:click="drawNextCard" src="../../assets/CardBack.png"/>
</div>
</template>

<script>

import {eventBus} from '../../main.js';

export default {
  name: "deck-list",
  props:['topCardStatus'],
  data() {
    return{
      selectedClass: 'card-icon-greyed',
      unSelectedClass: 'card-icon-original'
    }

  },
  methods: {
    drawNextCard(){
      eventBus.$emit('draw-next-card');
    }
  }
}
</script>

<style lang="css" scoped>

.deck-container {
  display: grid;
  grid-template-rows: min-content 1fr;
  justify-self: center;
}

.card-icon-original:hover {
  transform: scale(1.1);
}

.card-icon-original {
  width: 12rem;
  height: 16rem;
  padding: 0.5em;
  transition: all .2s ease-in-out;
}

.card-icon-greyed {
  width: 12rem;
  height: 16rem;
  filter: grayscale(75%);
}

.game-sub-section-header {
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  background-color: #004225;
  color: #fff;
  padding: .5rem;
}

</style>
