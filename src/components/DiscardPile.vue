<template lang="html">
  <div id="discard-pile" v-if="this.discardPile.length > 0">
    <h4>Discard Pile:</h4>
    <img class="card-icon" :src="this.discardPile[this.discardPile.length-1][0].image"/>
  </div>
</template>

<script>

export default {
  name: "discard-pile",
  props: ['discardPile']
}
</script>

<style lang="css" scoped>

.card-icon {
  max-width: 11em;
  max-height: 11em;
  padding: 2em;
}

</style>
