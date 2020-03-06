<template lang="html">
  <div>
    <p>Hi</p>
    <register></register>
  </div>
</template>

<script>

import Register from '../components/Register.vue';

export default {
  name: 'login',
  components: {
    'register': Register
  }
}
</script>

<style lang="css" scoped>
</style>
