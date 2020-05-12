<template lang="html">
  <div id="profile-container">
    <div id="button-row">
      <b-button id="btn-main">Edit Profile</b-button>
      <b-button id="btn-main" v-on:click="signOut">Sign Out</b-button>
    </div>
    <div id="photo-box">
      <img src="../../assets/profile-default.jpg">
    </div>
    <div id="profile-info-box">
      <div id="profile-info-box-title">
        <h5><b>Profile:</b></h5>
      </div>
      <div id="profile-info-box-data">
    <p><b>Golfer Name:</b> {{this.userData.username}}</p>
    <p><b>Games Played:</b> {{this.gamesPlayed}}</p>
    <p><b>Total Score:</b> {{this.totalScore}}</p>
    <p><b>Average Score:</b> {{this.averageScore}}</p>
      </div>
    </div>
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
  padding: 1em;
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
  width: 100%;
  font-size: 150%;
}

#button-row {
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
}

#button-row #btn-main:last-child {
  margin-left: 25px;
}

#photo-box {
  border: 5px solid black;
}

#photo-box img {
  height: 300px;
  width: 200px;
}


</style>
