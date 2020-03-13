<template lang="html">
  <div id="end-game-modal">
    <b-modal v-model="modalShow" size="lg" id="my-modal" centered title="Game Result:" ok-only>
      <score-card :scoreCard="scoreCard"/>
    </b-modal>
  </div>
</template>

<script>
import ScoreCard from './ScoreCard.vue';

export default {
  name: "end-game",
  props:['scoreCard', 'gameStatus'],
  data(){
    return {
      modalShow: true
    }
  },
  components: {
    "score-card": ScoreCard,
  },
  watch : {
    gameStatus(){
      if(!this.gameStatus){
        this.modalShow = true;
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
