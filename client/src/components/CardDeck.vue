<template lang="html">
<div class="deck-container">
  <h4>Deck:</h4>
  <img class="card-icon" v-on:click="drawNextCard" src="../assets/CardBack.png"/>
</div>
</template>

<script>

import {eventBus} from '../main.js';

export default {
  name: "deck-list",
  methods: {
    drawNextCard(){
      eventBus.$emit('draw-next-card');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
