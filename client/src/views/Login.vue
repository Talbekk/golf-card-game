<template lang="html">
  <div class="auth-container">
    <div class="welcome-info">
      <h2 class="game-header">Welcome To Golf: The Card Game</h2>
      <p class="welcome-info">If you are new to the game please register below. If you already have a profile selection sign in from the options below. If you wish to play as a guest please select the Play As A Guest option.</p>
    </div>
    <div class="chosen-auth-option">
      <register class="auth-box auth-reg"/>
      <!-- <sign-in class="auth-box auth-login"/> -->
    </div>
  </div>
</template>

<script>

import Register from '../components/login/Register.vue';
import SignIn from '../components/login/SignIn.vue';

export default {
  name: 'login',
  components: {
    'register': Register,
    'sign-in': SignIn
  }
}
</script>

<style lang="css" scoped>

.auth-container {
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-column-gap: 4rem;
  margin: 0 auto;
  border: 1px solid #000;
}

.chosen-auth-option {
  border-top: 1px solid #000;
}

.welcome-info {
  margin: 0 auto;
}

.welcome-info > p{
  font-size: 1.5rem;
  padding: 1rem 2rem;
  max-width: 50ch;
  word-wrap: break-word;
  text-align: center;
}
</style>
