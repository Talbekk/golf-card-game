<template lang="html">
  <li>
    <img class="card-icon" v-if="hidden" v-on:click="revealCard" src="../assets/CardBack.png"/>
    <img class="card-icon" v-if="!hidden" :src="playerCard.image"/>
    <div id="button-container">
    <button type="button" v-o:click="lockCard" name="button">LOCK IN</button>
    <button type="button" name="button">SWITCH</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'player-card',
  props: ['playerCard', 'index'],
  data () {
    return {
      hidden: true,
      lockedIn: false
    }
  },
  methods: {
  revealCard() {
    if(this.lockedIn === false){
    this.hidden = !this.hidden;
  }
  },
  lockCard() {
    this.revealCard();
    this.lockedIn = true;
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
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

}

.card-icon {
  max-width: 15em;
  max-height: 15em;
  padding: 2em;
}
</style>
