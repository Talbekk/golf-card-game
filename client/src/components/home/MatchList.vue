<template lang="html">
  <div id="match-list">
    <!-- <h4>Single Player:</h4> -->
    <div>
      <b-table hover head-variant="dark" border :items="matches" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
import MatchDetails from './MatchDetails.vue';

export default {
  name: 'match-list',
  props:['matches'],
  data() {
    return {
      fields: [
        { key: 'date.date', label: 'Date', sortable: true },
        { key: 'card.length', label: 'Length', sortable: false },
        // { key: 'averageScore', label: 'Average', sortable: true },
        { key: 'score', sortable: true }
      ],
      averageScore: 0
    }
  },
  components: {
    "match-details": MatchDetails
  }
}
</script>

<style lang="css" scoped>

#match-list{
  padding: 1em;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(5rem, 1fr));
  font-size: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid #4b8a4a 1px;
  border-radius: 5px;
  background-color: #4b8a4a;
  background-size: cover;
  color: #333;
  box-shadow: 0 30px 80px 10px rgb(0,0,0,0.8); */
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start; */
}

#list-item{
  /* border: solid black 1px;
  padding: 2em;
  border-radius: 10%;
  margin: 2em;
  max-width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border: solid black 1px;
  margin: 2em; */
  border: solid #4b8a4a 1px;
  border-radius: 5px;
  background-color: #4b8a4a;
  background-size: cover;
  color: #333;
  box-shadow: 0 5px 15px 0px rgb(0,0,0,0.7);
  list-style: none;
}

ul{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 3em;
  max-width: 100%;
}
</style>
