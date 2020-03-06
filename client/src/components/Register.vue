<template lang="html">
  <div>
    <div v-if="error" class="error">{{error.message}}</div>
    <form @submit.prevent="handleSubmit">
      <div class="email">
        <input type="email" v-model="email" placeholder="email">
      </div>
      <div class="username">
        <input type="text" v-model="username" placeholder="username">
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password">
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import {firebase, db, auth} from '../firebase.js';

export default {
  data(){
    return{
      email: "",
      password: '',
      username: "",
      error: ''
    }
  },
  methods: {
    async handleSubmit(){
      try {
      const user  = firebase.auth().createUserWithEmailAndPassword(this.email, this.password).
      then(() => {
        const uid = auth.currentUser.uid;
        db.ref().child('users').child(uid).set({
          email: this.email,
          username: this.username,
          games: {},
          userID: uid
        })
        console.log("uid", uid);
      }).then(() => {
        console.log("success", user);
        this.$router.replace({name: "home"});
      })
    } catch(err){
      console.log("fail", err);
    }
  }
}
}
</script>

<style lang="css" scoped>
</style>
