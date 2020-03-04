<template lang="html">
<div class="deck-container">
  <h4>Deck:</h4>
  <img v-bind:class="[topCardStatus ? selectedClass : unSelectedClass]" v-on:click="drawNextCard" src="../assets/CardBack.png"/>
</div>
</template>

<script>

import {eventBus} from '../main.js';

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

.card-icon-original {
  max-width: 12em;
  max-height: 14em;
  padding: 1.5em;
}

.card-icon-greyed {
  max-width: 12em;
  max-height: 14em;
  padding: 1.5em;
  filter: grayscale(75%);
}

h4{
  margin-top: 10px;
  margin-bottom: 0;
}
</style>
