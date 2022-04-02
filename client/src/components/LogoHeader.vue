<template lang="html">
  <div class="logo-header">
    <ul class="nav-list">
      <li>
        <img class="nav-img" src="../assets/GameLogo.svg" height="80" alt=""/>
      </li>
       <li>
          <a href="#" class="nav-item" @click="quitGame">Home</a>
      </li>
       <li>
          <a href="#" class="nav-item" v-if="!gameStatus" @click="showLeaderboardPage">Leaderboard</a>
          <a href="#" class="nav-item"v-if="gameStatus" @click="showLeaderboardPopup">Leaderboard</a>
          <modal name="leaderboard" height="75%" width="75%">
            <div class="popup-container">
                <div class="popup-close-btn" @click="$modal.hide('leaderboard')">
                  X
                </div>
              <div class="popup-content-container">
                <scores-page/>
              </div>
            </div>
          </modal>
        </li>
        <li>
          <a href="#" class="nav-item" v-if="!gameStatus" @click="showRulesPage">Rules</a>
          <a href="#" class="nav-item" v-if="gameStatus" @click="showRulesPopup">Rules</a>
          <modal name="rules" :scrollable="true" height="auto" width="75%">
            <div class="popup-container">
              <div class="popup-close-btn" @click="$modal.hide('rules')">
                X
              </div>
              <div class="popup-content-container">
                <rules/>
              </div>
            </div>
          </modal>
      </li>
    </ul>
  </div>
</template>

<script>

import {eventBus} from '../main.js';
import ScoresPage from './scores/ScoresPage.vue';
import Rules from './rules/Rules';

export default {
  name: "logo-header",
  data(){
    return{
      loggedIn: false,
      score: 0,
      currentHole: 1
    }
  },
  props:['gameStatus', 'gameMode'],
  components: {
    'scores-page': ScoresPage,
    'rules': Rules
  },
  mounted(){
    eventBus.$on('total', (total) => {
      this.score = total;
    }),
    eventBus.$on('start-next-hole', () => {
      this.currentHole+=1;
    }),
    eventBus.$on('start-new-game', () => {
      this.currentHole = 1;
      this.score = 0;
    })
  },
  methods: {
    newGame(){
      eventBus.$emit('start-new-game', this.gameMode);
      this.score = 0;
      this.currentHole = 1;
    },
    quitGame(){
      eventBus.$emit('reset-app');
      this.score= 0;
      this.currentHole = 1;
      this.$router.push('/')
    },
    showLeaderboardPopup(){
     this.$modal.show('leaderboard');
    },
    showRulesPopup(){
     this.$modal.show('rules');
    },
    showLeaderboardPage(){
     this.$router.push('/leaderboard');
    },
    showRulesPage(){
     this.$router.push('/rules');
    }
  }
}
</script>

<style lang="css" scoped>

.logo-header {
  background-color: #004225;
  margin-bottom: 2rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
              0 2px 4px rgba(0,0,0,0.07), 
              0 4px 8px rgba(0,0,0,0.07), 
              0 8px 16px rgba(0,0,0,0.07),
              0 16px 32px rgba(0,0,0,0.07), 
              0 32px 64px rgba(0,0,0,0.07);
}

.nav-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  margin: 0;
}

.nav-item {
  font-weight: 500;
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  margin-left: 1.5rem;
  line-height: -1rem;
}

.nav-img {
  height: 7rem;
  width: 7rem;
  padding: .5rem;
  background-color: yellow;
  border-bottom: 1px solid #004225;
}

</style>
