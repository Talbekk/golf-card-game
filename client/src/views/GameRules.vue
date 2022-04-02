<template lang="html">
  <div class="game-rules">
    <rules/>
  </div>
</template>

<script>

import Rules from "../components/rules/Rules";

export default {
  name: "game-rules",
    components: {
    "rules": Rules
  }
}

</script>

<style lang="css" scoped>

.game-rules {
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
              0 2px 4px rgba(0,0,0,0.07), 
              0 4px 8px rgba(0,0,0,0.07), 
              0 8px 16px rgba(0,0,0,0.07),
              0 16px 32px rgba(0,0,0,0.07), 
              0 32px 64px rgba(0,0,0,0.07);
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  color: #000;
}

</style>
