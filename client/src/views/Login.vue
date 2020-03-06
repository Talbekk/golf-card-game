<template lang="html">
  <div>
    <p>Hi</p>
    <register></register>
    <sign-in></sign-in>
  </div>
</template>

<script>

import Register from '../components/Register.vue';
import SignIn from '../components/SignIn.vue';

export default {
  name: 'login',
  components: {
    'register': Register,
    'sign-in': SignIn
  }
}
</script>

<style lang="css" scoped>
</style>
