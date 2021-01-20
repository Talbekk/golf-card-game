<template lang="html">
  <div id="game-history-container">
    <p v-if='checkForMatches' class="match-placeholder-text">Your match log will appear here...</p>
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
  },
computed: {
  checkForMatches(){
    return (this.matches.length === 0);
  }
}
}
</script>

<style lang="css" scoped>

.match-placeholder-text {
  font-size: 2rem;
  padding: 1rem;
  font-style: italic;
  font-weight: 200;
}
</style>
