<template lang="html">
  <div>
    <div v-if="error" class="error">{{error.message}}</div>
    <form @submit.prevent="handleSubmit">
      <div class="email">
        <input type="email" v-model="email" placeholder="email">
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password">
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import {firebase} from '../firebase.js';

export default {
  data(){
    return{
      email: "",
      password: '',
      error: ''
    }
  },
  methods: {
    async handleSubmit(){
      try {
      const user  = firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
      console.log("success", user);
      this.$router.replace({name: "home"});
    } catch(err){
      console.log("fail", err);
    }
  }
}
}
</script>

<style lang="css" scoped>
</style>
