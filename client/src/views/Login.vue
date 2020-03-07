<template lang="html">
  <div>
    <p>Welcome to Golf: The Card Game</p>
    <div id="login-container">
    <register></register>
    <sign-in></sign-in>
  </div>
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

#login-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
</style>
