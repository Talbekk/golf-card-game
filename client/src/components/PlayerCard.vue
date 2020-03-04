<template lang="html">
  <div id="my-container">
  <li>
    <img class="card-icon" v-if="hidden" v-on:click="showCard" src="../assets/CardBack.png"/>
    <img class="card-icon" v-if="!hidden" :src="this.playerCard.image"/>
    <div id="button-container" v-if="!lockedIn">
      <b-button pill type="button" v-on:click="lockCard" name="button">LOCK</b-button>
      <b-button pill type="button" v-on:click="switchCard" name="button">SWITCH</b-button>
      <div class="my-3">
      <b-button
      v-bind:id="`popover-reactive-${index}`"
      variant="primary"
      ref="button"
      >Popover</b-button>
    </div>
    </div>
  </li>

  <b-popover
      v-bind:target="`popover-reactive-${index}`"
      triggers="click"
      :show.sync="popoverShow"
      placement="right"
      container="my-container"
      ref="popover"
      @hidden="onHidden"
    >
    <template v-slot:title>
        <b-button @click="onClose" class="close" aria-label="Close">
          <span class="d-inline-block" aria-hidden="true">&times;</span>
        </b-button>
        Interactive Content
      </template>
      <div>
        <b-button @click="lockCard" size="sm" variant="danger">LOCK</b-button>
        <b-button @click="switchCard" size="sm" variant="danger">SWITCH</b-button>
    </div>
  </b-popover>
</div>
</template>

<script>

import {eventBus} from '../main.js';

export default {
  name: 'player-card',
  props: ['playerCard', 'shownCards', 'lockedCards', 'counter', 'index'],
  data () {
    return {
      hidden: true,
      lockedIn: false,
      popoverShow: false
    }
  },
  watch: {
    lockedCards(){
      if (this.lockedCards.length === 0){
        this.resetCard();
      }
    }
  },
  methods: {
    showCard() {
      if (this.shownCards < 2 && this.counter === 0){
        this.hidden = false;
        setTimeout(()=> { this.hideCard() },2000);
        eventBus.$emit('shown-a-card', 1);
      }
    },
    revealCard() {
      if(this.lockedIn === false){
        this.hidden = true;
      } else {
        this.hidden = false;
      }
    },
    hideCard(){
      if (this.lockedIn === false){
      this.hidden = true;
    }
    },
    lockCard() {
      eventBus.$emit('card-value', this.playerCard)
      this.lockedIn = true;
      this.revealCard();
      this.onClose();
    },
    switchCard() {
      eventBus.$emit('player-card', this.playerCard)
      this.lockedIn = true;
      this.revealCard();
      this.onClose();
    },
    resetCard(){
      this.hidden = true;
      this.lockedIn = false;
    },
    onClose() {
      console.log(this.index);
        this.popoverShow = false;
      },
      onHidden() {
      // Called just after the popover has finished hiding
      // Bring focus back to the button
      this.focusRef(this.$refs.button);
    },
    focusRef(ref) {
        // Some references may be a component, functional component, or plain element
        // This handles that check before focusing, assuming a `focus()` method exists
        // We do this in a double `$nextTick()` to ensure components have
        // updated & popover positioned first
        this.$nextTick(() => {
          this.$nextTick(() => {
            ;(ref.$el || ref).focus()
          })
        })
      },
      getID(){
        return `popover-reactive-${this.index+1}`;
      }
  }
}
</script>

<style lang="css" scoped>

li {
  display: flex;
  flex-direction: column;
}

#button-container {
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 80px 80px;
  grid-gap: 10px;
}

.card-icon {
  margin-left: auto;
  margin-right: auto;
  max-width: 8em;
  max-height: 10em;
  padding: 1.5em;

}

</style>
