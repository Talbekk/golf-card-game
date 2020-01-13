<template lang="html">
  <div>
    
  </div>

</template>

<script>
import {eventBus} from '../main.js'
export default {
  name: 'card',
  props: ['card'],
  methods: {
    getACard(){
      eventBus.$emit('Select a card', this.card);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
