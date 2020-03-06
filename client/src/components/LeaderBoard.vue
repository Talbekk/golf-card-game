<template lang="html">
  <div>
    <table>
  <tr>
    <th>#</th>
    <th>Name</th>
    <th>Score</th>
  </tr>
  <tr v-for="(score, index) in scores">
    <td>{{index+1}}</td>
    <td>{{score.golfer}}</td>
    <td>{{score.score}}</td>
  </tr>
</table>
  </div>
</template>

<script>
export default {
  name: "leaderBoard",
  props: ['scores', 'title', 'gameStatus']
}
</script>

<style lang="css" scoped>


table, th, td {
  border: 1px solid black;
}

table {
  width: 100%;
}

th {
  height: 30px;
}

</style>
