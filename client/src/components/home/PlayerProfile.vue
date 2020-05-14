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
    <p class="record-box top-left">Games Played: {{this.gamesPlayed}}</p>
    <p class="record-box top-right">Total Score: {{this.totalScore}}</p>
    <p class="record-box bot-left">Average Score: {{this.averageScore}}</p>
    <p class="record-box bot-right">Best Score: {{this.bestScore}}</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

import {firebase, auth} from '../../firebase.js';

export default {
  name: 'player-profile',
  props: ['userData', 'gamesPlayed', 'totalScore', 'averageScore', 'bestScore'],
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
  padding: 0.7em 1em 1em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin: 1em;
  border: solid #4b8a4a 1px;
  border-radius: 5px;
  background-color: #4b8a4a;
  background-size: cover;
  color: #333;
  box-shadow: 0 30px 80px 10px rgb(0,0,0,0.8);
  font-size: 200%;

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
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
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

.record-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  font-size: 75%;
  padding: 1em;
}

.record-box.top-left {
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

.record-box.top-right {
  border-left: 1px solid black;
  border-bottom: 1px solid black;
}

.record-box.bot-left {
  border-right: 1px solid black;
  border-top: 1px solid black;
}

.record-box.bot-right {
  border-left: 1px solid black;
  border-top: 1px solid black;
}


</style>
