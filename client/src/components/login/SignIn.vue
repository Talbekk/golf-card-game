<template lang="html">
  <div class="chosen-auth-container">
    <b-form @submit.prevent="handleSignIn">
      <b-form-group id="sign-in" label="Email Address:">
        <b-form-input type="email" v-model="email" placeholder="Enter Email Address"/>
      </b-form-group>
      <b-form-group id="password" label="Password:">
        <b-form-input type="password" v-model="password" placeholder="Enter Password"/>
      </b-form-group>
        <b-button id="btn-main" type="submit">Sign In</b-button>
    </b-form>
    <div class="error" v-if="error">{{error.message}}</div>
  </div>
</template>

<script>

import {firebase} from '../../firebase.js';
import {eventBus} from '../../main.js';

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

.form-control {
  font-size: 1.5rem;
}

</style>
