<template lang="html">
  <div id="profile-container">
    <div id="button-row">
      <b-button id="btn-main">Edit Profile</b-button>
      <b-button id="btn-main" v-on:click="signOut">Sign Out</b-button>
    </div>
    <div id="information-row">
    <div id="photo-box">
      <img src="../../assets/profile-default.jpg">
    </div>
    <div id="profile-info-box">
      <div id="profile-info-box-title">
        <h2><b>{{this.userData.username}}</b></h2>
      </div>
      <div id="profile-info-box-data">
    <p><b>Games Played:</b> {{this.gamesPlayed}}</p>
    <p><b>Total Score:</b> {{this.totalScore}}</p>
    <p><b>Average Score:</b> {{this.averageScore}}</p>
      </div>
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
  width: 75%;
  font-size: 150%;
}

#button-row {
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
}

#information-row {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 5px 10px;
}

#profile-info-box {
  width: 100%;
  /* padding: 0 20px; */
  display: flex;
  flex-direction: column;
  flex: 8;
  align-items: stretch;
}

#profile-info-box-title {
  border: 1px solid black;
  padding: 5px;
  color: #fff;
  background-color: #000;
  flex-grow: 1;
}

#profile-info-box-data {
  border: 1px solid #000;
  background-color: #555;
  color: #fff;
  padding: 10px;
  flex-grow: 2;
}

#button-row #btn-main:last-child {
  margin-left: 25px;
}

#photo-box {
  flex: 1;
}

#photo-box img {
  height: 300px;
  width: 200px;
  border: 5px solid black;
}


</style>
