<template lang="html">
  <div>
  <li>
    <img class="card-icon" :src="playerCard.image"/>
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
  props: ['playerCard', 'index']
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
</style>
