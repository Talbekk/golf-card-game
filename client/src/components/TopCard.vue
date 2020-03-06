<template lang="html">
  <div id="top-card">
    <p>Top Card:</p>
    <img class="card-icon"
    :src="this.topCard.image" v-on:click="handleClick"/>
  </div>
</template>

<script>

import {eventBus} from '../main.js';

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

.card-icon {
  max-width: 11em;
  max-height: 10.8em;
  padding: 0.7em;
}

h4 {
  margin-top: 10px;
  margin-bottom: 0;
}

p {
  margin-bottom: 0px
}

</style>
