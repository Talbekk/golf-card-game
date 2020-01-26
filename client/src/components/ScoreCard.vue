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
    for ( let hole = 1; hole <= 9; hole++){
      this.holes.push(hole);
    }
    for (let score = 1; score <= 9; score++){
      this.scores.push("");
    }
  },
    watch: {
      scoreCard() {

        if (this.scoreCard.length === 0){
          this.scores = [];
          for (let score = 1; score <= 9; score++){
            this.scores.push("");
          }
        } else {
        let counter = 0;
        for (const currentScore of this.scoreCard){
        this.scores.splice(counter, 1, currentScore);
        counter +=1;
      }
    }
      }
    },
    scores() {
      if (this.scores.length === 9){
        eventBus.$emit('total-score', this.score);
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
  table-layout: auto;
  width: 400px;
}

table, tr, th {
  border: 1px solid black;

}

</style>
