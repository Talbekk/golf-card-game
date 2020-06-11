<template lang="html">
  <div>
    <b-table large hover head-variant="dark" border :items="scores" :fields="fields">
    </b-table>
  </div>
</template>

<script>
export default {
  name: "leaderBoard",
  props: ['scores', 'title', 'gameStatus'],
  data() {
    return {
  fields: [
    { key: 'golfer', label: 'Name' },
    { key: 'score', label: 'Score', sortable: true }
  ]
  }
  }
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
