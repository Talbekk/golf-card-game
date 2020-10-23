<template lang="html">
  <div id="game-history-container">
    <h3>Match History:</h3>
    <match-list :matches='matches'/>
  </div>
</template>

<script>
import MatchList from './MatchList.vue';

export default {
  name: "game-history",
  props:['matches'],
  components: {
    "match-list": MatchList
  }
}
</script>

<style lang="css" scoped>
</style>
