<template lang="html">
  <div class="auth-container">
    <div class="welcome-info">
      <div class="title-layout">
        <h2 class="game-header">Welcome To Golf</h2>
        <h3 class="section-header">The Card Game</h3>
      </div>
       <p class="welcome-info">Welcome to Golf: The Card Game, the online version of the fast-paced and exciting table-top card game. If you are new to the game, please checkout the rules option up in the navigation menu of the app. There are a few options to start off, please select one to get started or continue to regsuter for the game:</p>
    </div>
      <div class="auth-options">
        <button class="auth-option-btn" v-on:click='selectAuthOption("register")'>Register User</button>
        <button class="auth-option-btn" v-on:click='selectAuthOption("sign-in")'>Sign In</button>
        <button class="auth-option-btn" v-on:click='selectAuthOption("guest-mode")'>Guest Practice</button>
      </div>
      <register v-if='selectedAuthOption === "register"' class="auth-box auth-reg"/>
      <sign-in v-if='selectedAuthOption === "sign-in"' class="auth-box auth-login"/>
      <p v-if='selectedAuthOption === "guest-mode"' class="auth-box auth-guest-login">Hi</p>
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
  },
  data () {
    return {
      selectedAuthOption: "register"
    }
  },
  methods: {
    selectAuthOption(option){
      this.selectedAuthOption = option;
    }
  }
}
</script>

<style lang="css" scoped>

.auth-container {
  display: grid;
  grid-template-rows: min-content min-content 1fr;
  grid-column-gap: 4rem;
  margin: 0 auto;
  border: 1px solid #000;
}

.title-layout {
  background-color: #004225;
  text-align: center;
  padding: 1rem;
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

.auth-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.auth-option-btn {
  font-size: 1.8rem;
  text-transform: uppercase;
  justify-content: center;
  padding: .2em;
  margin-top: 1rem;
  background-color: #004225;
  color: #fff;
}

.auth-option-btn:hover{
  background-color: #fff;
  color: #004225;
}

</style>
