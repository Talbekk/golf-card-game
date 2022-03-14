<template lang="html">
  <div class="chosen-auth-container">
    <b-form @submit.prevent='startNewGuestGame'>
      <b-form-group id="guest-sign-up" label="Golfer Name:">
        <b-form-input type="text" v-model="golferName" placeholder="Enter Golfer Name"/>
      </b-form-group>
        <b-button id="btn-main" type="submit">Tee Off</b-button>
    </b-form>
  </div>
</template>

<script>

import {firebase} from '../../firebase.js';
import {eventBus} from '../../main.js';

export default {
  name: 'guest-sign-up',
  data(){
    return {
      golferName: "",
      email: "guest@guest.com",
      password: "guest12345"
    }
  },
  methods: {
      async startNewGuestGame(){
            console.log("Hi there");
            eventBus.$emit('username-selected', this.golferName);
            eventBus.$emit('start-new-game', "single-player");
            await this.handleSignIn();
      },
      async handleSignIn(){
      try {
      const val = await firebase.auth().signInWithEmailAndPassword(this.email, this.password);
      this.$router.replace({name: 'game'});
      eventBus.$emit('start-new-game', "single-player");
    } catch(err) {
      window.alert("Please try entering your golfer's name again!");
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