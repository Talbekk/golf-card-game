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
  padding: 1rem;
  color: #000;
}

</style>
