<template lang="html">
  <div id="top-card">
    <p>Top Card:</p>
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

#top-card {
    padding: 0.5em;
    transition: all .2s ease-in-out;
}

#top-card:hover { transform: scale(1.1); }

.card-icon {
  width: 11rem;
  height: 15.7rem;
}

h4 {
  margin-top: 10px;
  margin-bottom: 0;
}

p {
  margin-bottom: 0px;
  color: #fff;
}

</style>
