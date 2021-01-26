<template lang="html">
  <div class="top-card">
    <h5 class="game-sub-section-header">Top Card</h5>
    <img class="card-icon"
    :src="this.topCard.image" v-on:click="handleClick"/>
  </div>
</template>

<script>

import {eventBus} from '../../main.js';

export default {
  name: "topCard",
  props: ['topCard'],
  methods: {
    handleClick(){
    eventBus.$emit('top-card-selected');
    }
  }   
  }
</script>

<style lang="css" scoped>

.top-card {
  display: grid;
  grid-template-rows: min-content 1fr;
  justify-self: center;
}

.card-icon {
  width: 11rem;
  height: 15.7rem;
  padding: 0.5em;
  transition: all .2s ease-in-out;
}

.card-icon:hover { transform: scale(1.1); }

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
