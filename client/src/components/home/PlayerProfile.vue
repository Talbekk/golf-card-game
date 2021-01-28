<template lang="html">
  <div class="profile-container">
    <div class="button-row">
      <b-button id="btn-main" v-on:click="signOut" variant="dark">Sign Out</b-button>
    </div>
    <div class="profile">
      <div class="profile-photo">
        <img src="../../assets/profile-default.jpg">
      </div>
      <h4 class="profile-name">{{this.userData.username}}</h4>
      <div class="profile-data">
        <p class="record-box top-left">Games Played: {{this.gamesPlayed}}</p>
        <p class="record-box top-right">Total Score: {{this.totalScore}}</p>
        <p class="record-box bot-left">Average Score: {{this.averageScore}}</p>
        <p class="record-box bot-right">Best Score: {{this.bestScore}}</p>
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

.profile-container {
  padding: 1rem;
  font-size: 2rem;
  display: grid;
  grid-template-rows: min-content 1fr;
}

.button-row {
  justify-self: right;
}

.profile {
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: min-content 1fr;
}

.profile-name {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border: 1px solid black;
  font-size: 2rem;
  margin: 0;
  padding: 5px;
  color: #fff;
  background-color: #000;
}

.profile-data {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  border: 1px solid #000;
  background-color: #004225;
  color: #fff;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.profile-photo {
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  border: 5px solid black;
}

.profile-photo > img {
  height: 30rem;
  width: 20rem;
}

.record-box {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 0;
  padding: .5rem;
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
