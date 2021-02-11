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
  width: 90%;
  margin: 0 auto;
  padding: 1rem;
  color: #000;
}

</style>
