<template lang="html">
  <div class="info-box-container">
    <h5 class="game-sub-section-header">Info</h5>
    <div class="info-box">
      <p><b>King:</b> 0</p>
      <p><b>5:</b> -5</p>
      <p><b>Pair:</b> 0</p>
      <p><b>4 of a kind:</b> -30</p>
      <p><b>A-4/6-10:</b> face value</p>
      <p><b>Q or J:</b> 10</p>
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
  padding: 0.5em;
  display: grid;
  justify-content: center;
  align-content: center;
  color: #777;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 0;
  width: 10rem;
  height: 14rem;
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

p {
  margin: .5rem;

}

</style>
