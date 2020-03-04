<template lang="html">
  <div id="top-card">
    <h4>Top Card:</h4>
    <img class="card-icon"
    :src="this.topCard.image"/>
  </div>
</template>

<script>

import {eventBus} from '../main.js';

export default {
  name: "topCard",
  props: ['topCard']
}
</script>

<style lang="css" scoped>

.card-icon {
  max-width: 12em;
  max-height: 14em;
  padding: 1.5em;
}

h4 {
  margin-top: 10px;
  margin-bottom: 0;
}

</style>
