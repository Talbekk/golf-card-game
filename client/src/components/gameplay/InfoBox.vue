<template lang="html">
  <div class="info-box-container">
    <h5 class="game-sub-section-header">Info</h5>
    <div class="info-box">
      <p class="info-box__header">Card Values</p>
      <p class="info-box__text">King: 0</p>
      <p class="info-box__text">5: -5</p>
      <p class="info-box__text">Pair: 0</p>
      <p class="info-box__text">4 of a kind: -30</p>
      <p class="info-box__text">A-4/6-10: face value</p>
      <p class="info-box__text">Q or J: 10</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "info-box"
}
</script>

<style lang="css" scoped>

.info-box-container {
  display: grid;
  grid-template-rows: min-content 1fr;
}

.info-box {
  display: grid;
  justify-content: center;
  align-content: stretch;
  color: #777;
  border: 1px solid #000;
  border-radius: 5px;
  width: 11rem;
  height: 15rem;
  margin: 0.5rem;
}

.info-box__header{
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  margin: 0;
  padding-top: .3rem;
}

.info-box__text{
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
}

.game-sub-section-header {
  font-size: 1.2rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  background-color: #004225;
  color: #fff;
  padding: .5rem;
}

</style>
