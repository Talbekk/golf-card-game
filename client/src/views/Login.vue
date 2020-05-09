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

#main-container {
    background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url('../assets/LoginCover.jpg');
    background-size: cover;
    height: 100vh;
    background-position: center;
    background-attachment: fixed;
}

#login-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

h2 {
  padding-top: 15px;
  font-weight: bold;
}

</style>
