<template lang="html">
  <div>
    <ul>
      <li v-for="score of scores" v-bind:key="score['.key']">
        <p>{{score.golfer}}</p>
        <p>{{score.score}}</p>
      </li>
    </ul>
  </div>

</template>

<script>

import {db} from '../firebase.js';

export default {
  name: "playerScores",
  data(){
    return {
      scores: ''
    }
  },
  created() {
   db.ref('scores').once('value', storedValue => this.scores = storedValue.toJSON());
 }
}
</script>

<style lang="css" scoped>
</style>
