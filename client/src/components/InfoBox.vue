<template lang="html">
  <div>
    <h4>Hint:</h4>
    <div id="info-container">
    <div id="info-box">
    <p>King: 0</p>
    <p>5: -5</p>
    <p>Pair: 0</p>
    <p>4 of a kind: -30</p>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "info-box"
}
</script>

<style lang="css" scoped>

#info-box{
  border: 2px solid #669999;
  border-radius: 10%;
  padding: 0.5em;
  height: 135px;
  font-size: 12px;
  margin-bottom: 0;
}

#info-container{
  padding: 24px;
}

h4 {
  margin-top: 10px;
  margin-bottom: 0;
}

</style>
