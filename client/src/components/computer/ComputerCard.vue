<template lang="html">
  <div id="player-card-container">
    <li>
    <img class="card-icon" v-if="hidden" src="../../assets/CardBack.png"/>
    <img class="card-icon" v-if="!hidden" :src="this.computerCard.image"/>
  </li>
</div>
</template>

<script>

import {eventBus} from '../../main.js';

export default {
  name: 'computer-card',
  props: ['computerCard', 'shownCards', 'lockedCards', 'counter', 'topCardSelected'],
  data () {
    return {
      hidden: true,
      lockedIn: false,
      popoverShow: false,
    }
  },
  mounted() {
    eventBus.$on("computer-card-reveal", (card) => {
      if(card === this.computerCard) {
        this.hidden = false;
      }
    })
  },
  watch: {
    lockedCards(){
      if (this.lockedCards.length === 0){
        this.resetCard();
      }
    },
    computerCard(){
        if (this.computerCard.lockedIn === true){
        this.hidden = false;
      } else {
        this.hidden = true;
      }
    }
  },
  methods: {
//     handleClick(){
//       eventBus.$emit("player-clicked-card", this.playerCard);
//       if(this.shownCards < 2 && this.counter === 0){
//       this.showCard();
//     }
//     if(this.shownCards === 2 && this.topCardSelected === true){
//       this.switchCard();
//     }
//     },
//     showCard() {
//         this.hidden = false;
//         setTimeout(()=> { this.hideCard() },2000);
//         eventBus.$emit('shown-a-card', 1);
//     },
//     revealCard() {
//       if(this.lockedIn === false){
//         this.hidden = true;
//       } else {
//         this.hidden = false;
//       }
//     },
//     hideCard(){
//       if (this.lockedIn === false){
//       this.hidden = true;
//     }
//     },
//     lockCard() {
//       eventBus.$emit('card-value', this.playerCard)
//       this.lockedIn = true;
//       this.revealCard();
//     },
//     switchCard() {
//       eventBus.$emit('player-card', this.playerCard)
//       this.lockedIn = true;
//       this.revealCard();
//     },
    resetCard(){
      this.hidden = true;
      this.lockedIn = false;
    }
  }
}
</script>

<style lang="css" scoped>

#player-card-container {
  padding: 0.5em;
}


.card-icon {
  margin-left: auto;
  margin-right: auto;
  max-width: 10em;
  max-height: 10em;
}

</style>
