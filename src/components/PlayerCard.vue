<template lang="html">
  <div>
  <li>
    <img class="card-icon" v-if="hidden" v-on:click="revealCard" src="../assets/CardBack.png"/>
    <img class="card-icon" v-if="!hidden" v-on:click="revealCard" :src="playerCard.image"/>
    <div id="button-container">
    <button type="button" name="button">LOCK IN</button>
    <button type="button" name="button">SWITCH</button>
    </div>
  </li>

  </div>

</template>

<script>
export default {
  name: 'player-card',
  props: ['playerCard', 'index'],
  data () {
    return {
      hidden: true
    }
  },
  methods: {
  revealCard() {
    this.hidden = !this.hidden;
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
  max-width: 20em;
  max-height: 20em;
  padding: 2em;
}
</style>
