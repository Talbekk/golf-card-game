<template lang="html">
  <div id="match-list">
    <h4>Match History:</h4>
    <ul>
      <li id="list-item" v-for="(match, index) in matches">
        <!-- <p>{{match.date.date}} @ {{match.date.time}}</p> -->
        <!-- <b-button @click="modalShow = !modalShow">View</b-button>
        <b-modal id="`modal-${index}`" size="lg" v-model="modalShow" scrollable title="Match Details:" ok-only> -->
          <match-details :match='match' :key='index'/>
        <!-- </b-modal> -->
      </li>
    </ul>
  </div>
</template>

<script>
import MatchDetails from '../components/MatchDetails.vue';

export default {
  name: 'match-list',
  props:['matches'],
  data(){
    return{
      modalShow: false
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
  margin: 2em;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(5rem, 1fr));
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
