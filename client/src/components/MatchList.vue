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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

#list-item{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border: solid black 1px;
  margin: 2em;
}
</style>
