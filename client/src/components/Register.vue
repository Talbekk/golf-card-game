<template lang="html">
  <div id="register-container">
    <h4>Register a user:</h4>
    <div v-if="error" class="error">{{error.message}}</div>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group id="email" label="Email:">
        <b-form-input type="email" v-model="email" required placeholder="email"/>
      </b-form-group>
      <b-form-group id="username" label="Golfer's Name:">
        <b-form-input type="text" v-model="username" required placeholder="username"/>
      </b-form-group>
      <b-form-group id="password" label="Password:">
        <b-form-input type="password" v-model="password" required placeholder="password"/>
        </b-form-group>
      <b-button type="submit">Sign Up</b-button>
    </b-form>
  </div>
</template>

<script>
import {firebase, db, auth} from '../firebase.js';
import {eventBus} from '../main.js';

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
        eventBus.$emit("register-user");
      }).then(() => {
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

#register-container{
  padding: 1em;
  border: solid black 1px;
  margin: 1em;
  border-radius: 5px;
  background-color: #4b8a4a;
  background-size: cover;
}

</style>
