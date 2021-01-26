<template lang="html">
  <div class  ="discard-pile-container">
    <h5 class="game-sub-section-header">Discard Pile</h5>
    <img v-if="this.discardPile.length > 0" class="card-icon" :src="this.discardPile[this.discardPile.length-1][0].image"/>
  </div>
</template>

<script>

export default {
  name: "discard-pile",
  props: ['discardPile']
}
</script>

<style lang="css" scoped>

.discard-pile-container {
  display: grid;
  grid-template-rows: min-content 1fr;
  justify-self: center;
}

.card-icon {
  width: 12rem;
  height: 16rem;
  padding: 0.5em;
  filter: opacity(50%);
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
