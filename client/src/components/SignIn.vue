<template lang="html">
  <div id="sign-in-container">
    <h4 id="login-heading">Sign in:</h4>
    <b-form @submit.prevent="handleSignIn">
      <b-form-group id="sign-in" label="Email:">
        <b-form-input type="email" v-model="email" placeholder="sign in"/>
      </b-form-group>
      <b-form-group id="password" label="Password:">
        <b-form-input type="password" v-model="password" placeholder="password"/>
      </b-form-group>
        <b-button id="btn-main" type="submit">Sign In</b-button>
    </b-form>
    <div class="error" v-if="error">{{error.message}}</div>
  </div>
</template>

<script>

import {firebase} from '../firebase.js';
import {eventBus} from '../main.js';

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
      this.$router.replace({name: 'home'});
      eventBus.$emit("signed-in");
    } catch(err) {
      window.alert("Please try entering your details again!");
      console.log("fail", err);
    }
    }
  }
}
</script>

<style lang="css" scoped>

#sign-in-container{
  padding: 1em;
  border: solid #4b8a4a 1px;
  margin: 1em;
  border-radius: 5px;
  background-color: #4b8a4a;
  background-size: cover;
  color: #333;
  box-shadow: 0 30px 80px 10px rgb(0,0,0,0.8);
}

</style>
