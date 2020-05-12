<template lang="html">
  <div id="profile-container">
    <div id="button-row">
      <b-button id="btn-main" v-on:click="signOut">Sign Out</b-button>
      <b-button id="btn-main">Edit Profile</b-button>
    </div>
    <h5><b>Profile:</b></h5>
    <p><b>Golfer Name:</b> {{this.userData.username}}</p>
    <p><b>Games Played:</b> {{this.gamesPlayed}}</p>
    <p><b>Total Score:</b> {{this.totalScore}}</p>
    <p><b>Average Score:</b> {{this.averageScore}}</p>
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

#profile-container {
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 2em;
  border: solid #4b8a4a 1px;
  border-radius: 5px;
  background-color: #4b8a4a;
  background-size: cover;
  color: #333;
  box-shadow: 0 30px 80px 10px rgb(0,0,0,0.8);
  width: 60%;
  font-size: 150%;
}

button-row
</style>
