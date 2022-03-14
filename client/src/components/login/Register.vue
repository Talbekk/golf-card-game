<template lang="html">
  <div class="chosen-auth-container">
      <b-form class="register-form" @submit.prevent="handleSubmit">
      <b-form-group id="email" label="Email Address:">
        <b-form-input type="email" v-model="email" required placeholder="Enter Email Address"/>
      </b-form-group>
      <b-form-group id="username" label="Golfer Name:">
        <b-form-input type="text" v-model="username" required placeholder="Enter Golfer Name"/>
      </b-form-group>
      <b-form-group id="password" label="Password:">
        <b-form-input type="password" v-model="password" required placeholder="Enter Password"/>
        </b-form-group>
      <div class="error" v-if="errorMessage">{{errorMessage}}</div>
      <button class="action-btn" type="submit">Register Golfer</button>
    </b-form>
  </div>
</template>

<script>
import {firebase, db, auth} from '../../firebase.js';
import {eventBus} from '../../main.js';

export default {
  data(){
    return {
      email: null,
      password: '',
      username: "",
      errorMessage: null
    }
  },
  methods: {
    async handleSubmit(){
      try {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
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
      }).catch((err) => {
      this.errorMessage = err;
      });
    } catch(err){
      this.errorMessage = err;
    }
  }
}
}
</script>

<style lang="css" scoped>

.form-control {
  font-size: 1.5rem;
}

.error {
  font-size: 1.5rem;
  color: red;
  padding-bottom: 1rem;
}

.action-btn {
  margin: 0;
}

  </style>
