<template lang="html">
  <div>
  <li>
    <img class="card-icon" :src="playerCard.image"/>
  </li>

  </div>

</template>

<script>
export default {
  name: 'player-card',
  props: ['playerCard', 'index']
}
</script>

<style lang="css" scoped>
</style>
