<template lang="html">
    <div class="welcome-container">
        <div class="welcome-info">
            <h2 class="section-header">Welcome To Golf: The Card Game</h2>
            <p class="welcome-info">If you are new to the game please register below. If you already have a profile selection sign in from the options below. If you wish to play as a guest please select the Play As A Guest option.</p>
        </div>
        <div>

        </div>
    </div>
</template>

<script>
import {firebase, db, auth} from '../../firebase.js';
import {eventBus} from '../../main.js';
import Register from './Register.vue';

export default {
  data(){
    return {
    }
  }
}
</script>

<style lang="css" scoped>

  </style>
