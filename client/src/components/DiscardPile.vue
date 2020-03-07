<template lang="html">
  <div id="discard-pile" v-if="this.discardPile.length > 0">
    <p>Discard Pile:</p>
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
  max-width: 10em;
  max-height: 10em;
  padding: 0.5em;
}

h4 {
  margin-top: 10px;
  margin-bottom: 0;
}

p {
margin-bottom: 0px;
}

</style>
