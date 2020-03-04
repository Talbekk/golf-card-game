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
  max-width: 12em;
  max-height: 14em;
  padding: 1.5em;
}

h4 {
  margin-top: 10px;
  margin-bottom: 0;
}

</style>
