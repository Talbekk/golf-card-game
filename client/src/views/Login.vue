<template lang="html">
  <div id="main-container">
    <h2>Welcome to Golf: The Card Game</h2>
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
  flex-wrap: wrap;
}

h2 {
  font-weight: bold;
  font-size: 250%;
  color: #222;
  padding-bottom: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
}

</style>
