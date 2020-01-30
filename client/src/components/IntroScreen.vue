<template lang="html">
  <div class="">
  <div id="intro-screen" v-if="!selectScoresPage">
    <h4>The Deal:</h4>
    <p>
      Each player is dealt 4 cards face down from the deck. The remainder of the cards are placed face down, and the top card is turned up to start the discard pile beside it. Players arrange their 4 cards in a row face down. At the start of a round, the player can look at two cards but only for a short time.
    </p>
    <h4>GamePlay:</h4>
    <p>
      The object is for players to have the lowest value of the cards in front of them by either swapping them for lesser value cards or by pairing them up with cards of equal rank. A game is nine "holes" (deals), and the player with the lowest total score is the winner.
    </p>
      Beginning with the player to the dealer's left, players take turns drawing single cards from either the stock or discard piles. The drawn card may either be swapped for one of that player's 4 cards, or discarded. If the card is swapped for one of the face down cards, the card swapped in remains face up. If the player choose not to take the card, they must turn over one of their own. The round ends when all of a player's cards are face-up.
    </p>
   <h4>Scoring:</h4>
   <p>
     Each ace counts 1 point.
     Each 5 counts minus 5 points.
     Every other numeral card from 2 to 10 scores face value.
     Each jack or queen scores 10 points.
     Each king scores zero points.
     A pair of equal cards scores zero points for the column (even if the equal cards are 5s).
   </p>
   <div id="name-box" v-if="!newGame">
     <h4>Please enter the name of your golfer:</h4>
     <form id="user-name" v-on:submit.prevent="handleClick">
       <input id="username" type="text" name="username" v-model='userName' required>
       <input id="submit" type="submit" value="Tee Off">
      </form>
  </div>
    <!-- <button v-if='!newGame' v-on:click='clickedNewGame'>New Game</button> -->
    <button v-if='newGame' v-on:click='clickedDealCards'>Tee Off</button>
  </div>
  <div id="score-container">
  <scores-page v-if='selectScoresPage'></scores-page>
  <button v-if="!selectScoresPage" v-on:click="seeScoresPage">Leaderboard</button>
  <button v-if="selectScoresPage" v-on:click="seeScoresPage">Back</button>
  </div>
    </div>
</template>

<script>
import {eventBus} from '../main.js';
import ScoresPage from './ScoresPage.vue';

export default {
  name: 'intro-screen',
  data() {
    return {
      newGame: false,
      userName: null,
      selectScoresPage: false
    }
  },
  components: {
    "scores-page": ScoresPage
  },
  methods: {
    clickedNewGame(){
      eventBus.$emit('clicked-new-game');
    },
    handleClick(){
      eventBus.$emit('username-selected', this.userName);
      this.clickedNewGame();
    },
    seeScoresPage(){
      this.selectScoresPage = !this.selectScoresPage;

    }
  }
}
</script>

<style lang="css" scoped>

#intro-screen{
  margin-left: auto;
  margin-right: auto;
  padding: 8px 5px 12px 5px;
  max-width: 600px;
  font-size: 13px;
}

#name-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h4 {
  font-weight: bolder;
  text-decoration: underline;
}
#submit {
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #60a3bc;
  padding: 20px;
  border-radius: 75px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  margin-top: 15px;
}

#user-name {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;

}

#score-container {
  margin-left: auto;
  margin-right: auto;
  padding: 8px 5px 12px 5px;
  max-width: 600px;
  font-size: 13px;
}

#username{
  padding: 10px;
}

</style>
