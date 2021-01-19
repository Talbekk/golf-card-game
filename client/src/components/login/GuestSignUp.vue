<template lang="html">
  <div class="chosen-auth-container">
    <b-form @submit.prevent='startNewGuestGame'>
      <b-form-group id="guest-sign-up" label="Golfer Name:">
        <b-form-input type="text" v-model="golferName" placeholder="Enter Golfer Name"/>
      </b-form-group>
        <b-button id="btn-main" to="/game" type="submit">Tee Off</b-button>
    </b-form>
    <div class="error" v-if="error">{{error.message}}</div>
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
      error: ''
    }
  },
  methods: {
      startNewGuestGame(){
            eventBus.$emit('username-selected', this.golferName);
            eventBus.$emit('start-new-game', "single-player");
      }
  }
}
</script>



<style lang="css" scoped>

.form-control {
  font-size: 1.5rem;
}

</style>