<template lang="html">
  <table>
    <tr>
      <th>Hole</th>
      <th v-for="(hole, index) in this.holes">{{hole}}</th>
      <th>Total</th>
    </tr>
    <tr>
      <th>Score</th>
      <th v-for="(score, index) in this.scores">{{score}}</th>
      <th>{{totalScore}}</th>
    </tr>
  </table>
</template>

<script>

export default {
  name: 'score-card',
  props: ['scoreCard'],
  data() {
    return {
      holes: [],
      scores: [],
      total: 0
    }
  },
  mounted(){
    for ( let hole = 0; hole <= 9; hole++){
      this.holes.push(hole);
    }
    for (let score = 0; score <= 9; score++){
      this.scores.push("");
    }
  },
    watch: {
      scoreCard() {
        let counter = 0;
        for (const currentScore of this.scoreCard){
        this.scores.splice(counter, 1, currentScore);
        counter +=1;
      }
      }
    },
    computed: {
      totalScore: function () {
        let total = 0;
        for(const currentScore of this.scoreCard){
          total += currentScore;
        }
        return total;
    }
  }
}

</script>

<style lang="css" scoped>

table {
  empty-cells: show;
  border-collapse: collapse;
}

table, tr, th {
  border: 1px solid black;
}

</style>
