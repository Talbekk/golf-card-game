<template lang="html">
  <div class="player-container" v-if="playerCards.length > 0">
    <div class="player-header">
      <p class="player-name">{{this.userData.username}}</p>
      <p class="player-score">Score: {{this.score}}</p>
    </div>
    <player-cards :counter='counter' :lockedCards='lockedCards' :playerCards='playerCards' :topCardSelected="topCardSelected" :userData="userData"></player-cards>
  </div>
</template>

<script>
import PlayerCards from './PlayerCards.vue';
export default {
  name: 'player',
  props:['counter', 'lockedCards', 'playerCards', 'topCardSelected', 'userData', 'scoreCard'],
  data () {
    return {
      score: 0
    }
  },
  components: {
    "player-cards": PlayerCards 
  },
  watch: {
    scoreCard(){
      let amount = 0;
      if(this.scoreCard.length > 0){
        this.scoreCard.forEach((score) => {
          amount += score;
        })
        this.score = amount;
      }
    }
  }
}
</script>

<style lang="css" scoped>

.player-container {
  display: grid;
  grid-template-rows: repeat(2, min-content);
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
              0 2px 4px rgba(0,0,0,0.07), 
              0 4px 8px rgba(0,0,0,0.07), 
              0 8px 16px rgba(0,0,0,0.07),
              0 16px 32px rgba(0,0,0,0.07), 
              0 32px 64px rgba(0,0,0,0.07);
}

.player-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: .1rem;
  color: #fff;
}

.player-name,
.player-score {
  background-color: #004225;
  justify-content: center;
  font-size: 1.3rem;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  padding: .5rem;
  margin-bottom: 0;
}
</style>