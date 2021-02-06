<template lang="html">
  <div id="end-game-modal">
    <!-- <b-modal v-model="modalShow" size="lg" id="my-modal" centered title="Game Result:" ok-only>
      <score-card :scoreCard="scoreCard"/>
    </b-modal> -->
     <modal name="end-scorecard" height="75%" width="75%">
            <div class="popup-container">
                <div class="popup-close-btn" @click="$modal.hide('end-scorecard')">
                  X
                </div>
              <div class="popup-content-container">
                <p>Hey</p>
                <score-card :scoreCard="scoreCard"/>
              </div>
            </div>
          </modal>
  </div>
</template>

<script>
import ScoreCard from '../scores/ScoreCard.vue';

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
        this.$modal.show("end-scorecard");
      }
    }
  }
}
</script>

<style lang="css" scoped>

.popup-container {
  display: grid;
  grid-template-rows: min-content 1fr;
  padding: 1rem;
}

.pop-options {
  display: flex;
  justify-content: flex-end;
}

.popup-close-btn {
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  color: red;
  cursor: pointer;
}

</style>
