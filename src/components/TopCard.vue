<template lang="html">
  <div id="top-card">
  <img class="card-icon" :src="topCard.cards[0].image"/>
  </div>
</template>

<script>

import {eventBus} from '../main.js'

export default {
  name: "topCard",
  props: ['topCard']
  // mounted() {
  //     eventBus.$emit('top-card', this.topCard);
  //   }
  }
</script>

<style lang="css" scoped>

.card-icon {
  max-width: 15em;
  max-height: 15em;
  padding: 2em;

}

</style>
