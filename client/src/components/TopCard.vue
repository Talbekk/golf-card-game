<template lang="html">
  <div id="top-card">
    <h4>Top Card:</h4>
    <img class="card-icon"
    :src="this.topCard[0].image"/>
  </div>
</template>

<script>

import {eventBus} from '../main.js';

export default {
  name: "topCard",
  props: ['topCard', 'playerCards'],
  watch: {
  topCard(){
    if(this.topCard.length > 1){
    const switchedCard = this.topCard.pop();
    const index = this.playerCards.indexOf(switchedCard);
    console.log("index", index);
    eventBus.$emit('player-card', switchedCard);
    eventBus.$emit('switched-card');
    console.log("batman");
  }
  }
}
}
</script>

<style lang="css" scoped>

.card-icon {
  max-width: 12em;
  max-height: 14em;
  padding: 1.5em;
}

h4 {
  margin-top: 10px;
  margin-bottom: 0;
}

</style>
