<template lang="html">
  <div id="profile-container">
    <h5><b>Profile:</b></h5>
    <p><b>Golfer Name:</b> {{this.userData.username}}</p>
    <p><b>Games Played:</b> {{this.gamesPlayed}}</p>
    <p><b>Total Score:</b> {{this.totalScore}}</p>
    <p><b>Average Score:</b> {{this.averageScore}}</p>
    <b-button id="btn-main" v-on:click="signOut">Sign Out</b-button>
  </div>
</template>

<script>

import {firebase, auth} from '../../firebase.js';

export default {
  name: 'player-profile',
  props: ['userData', 'gamesPlayed', 'totalScore', 'averageScore'],
  methods: {
    async signOut(){
      try{
      const data = await firebase.auth().signOut();
      this.$router.replace({name: 'login'});
      eventBus.$emit("signed-out");
      this.userData = {};
      } catch(err) {
      console.log(err);
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
