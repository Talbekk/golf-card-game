<template lang="html">
  <div>
    <form @submit.prevent="handleSignIn">
      <div class="sign-in">
        <input type="email" v-model="email" placeholder="sign in">
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password">
      </div>
      <button type="submit">Sign In</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
  </div>
</template>

<script>

import {firebase} from '../firebase.js';

export default {
  name: 'sign-in',
  data(){
    return {
      email: "",
      password: '',
      error: ''
    }
  },
  methods: {
    async handleSignIn(){
      try {
      const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
      console.log("log in success", val);
      this.$router.replace({name: 'home'});
    } catch(err) {
      console.log("fail", err);
    }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
