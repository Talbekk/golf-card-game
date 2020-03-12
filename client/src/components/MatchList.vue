<template lang="html">
  <div id="match-list">
    <p>Match History:</p>
    <ul>
      <li>
        
      </li>
      <match-details v-for="(match, index) in matches" :match='match' :key='index'/>
    </ul>
  </div>
</template>

<script>
import MatchDetails from '../components/MatchDetails.vue';

export default {
  name: 'match-list',
  props:['matches'],
  components: {
    "match-details": MatchDetails
  }
}
</script>

<style lang="css" scoped>
</style>
