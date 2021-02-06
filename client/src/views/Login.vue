<template lang="html">
  <div class="auth-container">
    <div class="welcome-info">
      <div class="title-layout">
        <h2 class="game-header">Welcome To Golf</h2>
        <h3 class="section-header">The Card Game</h3>
      </div>
       <p class="welcome-info">Welcome to Golf: The Card Game, the online version of the fast-paced and exciting table-top card game. If you are new to the game, please checkout the rules option up in the navigation menu of the app. There are a few options to start off, please select one to get started or continue to register for the game:</p>
    </div>
      <div class="auth-options">
        <button :class="selectedAuthOption === 'register' ? 'auth-option-btn auth-btn-selected' : 'auth-option-btn'" v-on:click='selectAuthOption("register")'>Register User</button>
        <button :class="selectedAuthOption === 'sign-in' ? 'auth-option-btn auth-btn-selected' : 'auth-option-btn'" v-on:click='selectAuthOption("sign-in")'>Sign In</button>
        <!-- <button class="auth-option-btn" v-on:click='selectAuthOption("guest-mode")'>Guest Practice</button> -->
      </div>
      <register v-if='selectedAuthOption === "register"' class="auth-box auth-reg"/>
      <sign-in v-if='selectedAuthOption === "sign-in"' class="auth-box auth-login"/>
      <guest-sign-up v-if='selectedAuthOption === "guest-mode"' class="auth-box auth-guest-login"/>
  </div>
</template>

<script>

import Register from '../components/login/Register.vue';
import SignIn from '../components/login/SignIn.vue';
import GuestSignUp from '../components/login/GuestSignUp.vue';

export default {
  name: 'login',
  components: {
    'register': Register,
    'sign-in': SignIn,
    'guest-sign-up': GuestSignUp
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
  margin: 0 auto 5rem auto;
  background-color: #fff;
  border: 1px solid #004225;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
              0 2px 4px rgba(0,0,0,0.07), 
              0 4px 8px rgba(0,0,0,0.07), 
              0 8px 16px rgba(0,0,0,0.07),
              0 16px 32px rgba(0,0,0,0.07), 
              0 32px 64px rgba(0,0,0,0.07);
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
  grid-template-columns: repeat(2, 1fr);
}
.auth-option-btn,
.auth-option-btn::before,
.auth-option-btn::after,
.auth-option-btn:link,
.auth-option-btn:visited {
  font-size: 1.8rem;
  text-transform: uppercase;
  justify-content: center;
  padding: .2em;
  margin-top: 1rem;
  background-color: #004225;
  color: #fff;
}

.auth-option-btn:hover,
.auth-option-btn:active,
.auth-btn-selected {
  background-color: #fff;
  color: #004225;
}

.chosen-auth-container {
  padding: 1.5rem;
  font-size: 2rem;
}


</style>
