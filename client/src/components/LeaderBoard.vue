<template lang="html">
  <div>
    <h3>{{title}} Leaderboard:</h3>
    <table>
  <tr>
    <th>Name</th>
    <th>Score</th>
  </tr>
  <tr v-for="score in scores">
    <td>{{score.golfer}}</td>
    <td>{{score.score}}</td>
  </tr>
</table>
  </div>
</template>

<script>
export default {
  name: "leaderBoard",
  props: ['scores', 'title']
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
