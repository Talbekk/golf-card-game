<template lang="html">
  <div id="main-container">
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

#main-container{

    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/LoginCover.jpg');
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


</style>
