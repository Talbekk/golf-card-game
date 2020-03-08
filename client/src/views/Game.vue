<template lang="html">
  <div id="game_container">
    <div id="game-board">
    <div id="next-button">
      <game-header :gameStatus="gameStatus" :scoreCard="scoreCard" :lockedCards="lockedCards" :counter="counter" :currentHole="currentHole"></game-header>
    </div>
    <div v-if="!viewLeaderBoard" id="board-one">
      <discard-pile v-if='discardPile' :discardPile='discardPile'></discard-pile>
      <card-deck :topCardStatus='topCardStatus'></card-deck>
      <top-card v-if='topCard' :topCard='topCard'></top-card>
    </div>
  </div>
    <div id="hand-container" v-if="playerCards && !viewLeaderBoard">
      <player-cards :counter='counter' :lockedCards='lockedCards' :playerCards='playerCards' :topCardSelected="topCardSelected"></player-cards>
    </div>
  </div>
</template>

<script>

import DiscardPile from '../components/DiscardPile.vue';
import TopCard from '../components/TopCard.vue';
import PlayerCards from '../components/PlayerCards.vue';
import GameHeader from '../components/GameHeader.vue';
import ScoreCard from '../components/ScoreCard.vue';
import CardDeck from '../components/CardDeck.vue';
import InfoBox from '../components/InfoBox.vue';
import {eventBus} from '../main.js';
import {scoreRef, db} from '../firebase.js';
import {leaderboardRef} from '../firebase.js';

export default {
  name: "game",
  props: ['gameDeck', 'userName', 'gameStatus', 'userData'],
  data(){
    return {
      roundDeck: [], //round
      playerCards: null, //round
      topCard: null, //round
      currentCard: null, //round
      runningTotal: 0, //round
      counter: 0, //round
      currentHole: 1, //game
      lockedCards: [], //round
      scoreCard: [], //game
      discardPile: [], //round
      drawnCard: false, //round
      topCardStatus: false,
      viewLeaderBoard: false,
      topCardSelected: false
    }
  },
  components: {
    "player-cards": PlayerCards,
    "top-card": TopCard,
    "score-card": ScoreCard,
    "discard-pile": DiscardPile,
    "card-deck": CardDeck,
    "info-box": InfoBox,
    "game-header": GameHeader
  },
  mounted(){
    eventBus.$on('player-card', (card) => {
      let index = this.playerCards.indexOf(card);
      let currentTopCard = this.topCard;
      let switchedCard = this.playerCards.splice(index, 1, currentTopCard);
      let matchingCardValues = this.lockedCards.filter(card =>
        currentTopCard.value === card)
      if (matchingCardValues.length === 3){
          this.runningTotal = -30;
      } else if(matchingCardValues.length === 1 & currentTopCard.value === "5"){
        this.runningTotal += this.calculateScore(currentTopCard.value);
      } else if (matchingCardValues.length === 1) {
        this.runningTotal -= this.calculateScore(currentTopCard.value);
      } else {
        this.runningTotal += this.calculateScore(currentTopCard.value);
      }
      this.nextRound(currentTopCard.value);
      this.discardPile.push(switchedCard);
      this.counter += 1;
      this.topCardSelected = false;
    }),
    //round
    eventBus.$on('card-value', (card) => {
      this.currentCard = card;
      this.counter += 1;
    }),
    //round
    eventBus.$on('draw-next-card', () => {
      this.drawNextCard();
      this.topCardStatus = true;
    }),
    //game
    eventBus.$on('get-cards', () => {
      this.getCards();
    }),
    eventBus.$on('setup-game', () => {
      this.setupGame();
    }),
    eventBus.$on('start-next-hole', () => {
      this.nextHole();
    }),
    eventBus.$on('start-new-game', () => {
      this.setupNewGame();
    }),
    eventBus.$on('view-leaderboard', () => {
      this.viewLeaderBoard = !this.viewLeaderBoard;
    }),
    eventBus.$on('top-card-selected', () => {
      this.topCardSelected = !this.topCardSelected;
    })
  },
  watch: {
    //round
    currentCard() {
      let cardValue = this.currentCard.value;
      let amount = this.calculateScore(cardValue);
      let matchingCardValues = this.lockedCards.filter(card => cardValue === card)
      if (matchingCardValues.length === 3){
          this.runningTotal = -30;
      }
        else if(matchingCardValues.length === 1 & cardValue === "5"){
        this.runningTotal += amount;
      } else if (matchingCardValues.length === 1) {
        this.runningTotal -= amount;
      } else {
          this.runningTotal += amount;
      }
      this.nextRound(cardValue);
    },
    //round
    playerCards(){
      if (this.topCard === null) {
      this.drawTopCard();
    }
  },
  //round
  counter(){
    if (this.counter === 4){
      this.scoreCard.push(this.runningTotal);
      eventBus.$emit("score-card", this.scoreCard);
    }
  },
  //game
  scoreCard(){
    if (this.scoreCard.length === 9){
      let gameTotal = this.getTotalScore();
      leaderboardRef.push({golfer: this.userData.username, score: gameTotal, card: this.scoreCard, edit: false});
      // this.gameStatus = false;
      eventBus.$emit('game-status', false);
      try {
      db.ref('users/' + this.userData.userID).child('games').push({
        golfer: this.userData.username, score: gameTotal, card: this.scoreCard, date: this.getDate(), edit: false});
      } catch(err){
        console.log("fail", err);
      }
      }
    }
  },
computed: {
  //game
  holesCompleted(){
    return this.scoreCard.length;
  },
  //round
checkIfHoleFinished(){
  return ((this.currentHole >= 1 && this.counter===4 && this.lockedCards.length === 4 && this.gameStatus === true) ? true : false);
}
},
  methods: {
    //round
    getCards(){
      this.getRoundDeck();
      let hand = [];
      for (let counter = 0; counter < 4; counter++){
        let card = this.roundDeck.shift();
        hand.push(card);
      }
      this.playerCards = hand;
      this.playerCards.forEach((card) => {
        card.lockedIn = false;
      })
    },
    //round
    getRoundDeck(){
      this.gameDeck.cards.forEach((card) => {
        this.roundDeck.push(card);
      })
      return this.shuffleDeck(this.roundDeck);
    },
    //game
    shuffleDeck(deck){
      let newPosition;
      let temp;
      for (let i = deck.length-1; i > 0; i --) {
        newPosition = Math.floor(Math.random() * (i+1))
        temp = deck[i];
        deck[i] = deck[newPosition];
        deck[newPosition] = temp;
      }
    },
    //round
    drawTopCard(){
      if (this.playerCards) {
        this.topCard = this.roundDeck.shift();
      }
    },
    //round
    calculateScore(value){
      switch (value) {
        case "ACE":
        return 1;
        break;
        case "KING":
        return 0;
        break;
        case "QUEEN":
        return 10;
        break;
        case "JACK":
        return 10;
        break;
        case "5":
        return -5;
        default:
        return parseInt(value);
        break;
      }
    },
    setupGame(){
      this.playerCards = null;
      this.topCard = null;
      this.runningTotal = 0;
      this.lockedCards = [];
      this.discardPile = [];
    },
    //app
    setupNewGame(){
      this.setupGame();
      this.scoreCard = [];
      eventBus.$emit("score-card", this.scoreCard);
      this.counter = 0;
      this.currentHole = 1;
      this.roundDeck = [];
      this.getCards();
      eventBus.$emit('game-status', true);
      this.topCardStatus = false;
    },
    // round
    nextHole(){
      this.counter = 0;
      this.currentHole += 1;
      this.roundDeck = [];
      this.setupGame();
      this.getCards();
      this.discardPile = [];
      this.topCardStatus = false;
      // eventBus.$emit('finished-hole', this.currentHole);
    },
    nextRound(value){
      this.drawTopCard();
      this.drawnCard = false;
      this.lockedCards.push(value);
      this.topCardStatus = false;
    },
    drawNextCard(){
      if (this.drawnCard === false){
      this.drawTopCard();
      this.drawnCard = true;
    }
  },
  getTotalScore() {
    let counter = 0;
     this.scoreCard.forEach((score) => {
       counter += score;
    })
    return counter;
  },
  getDate() {
  const today = new Date();
  const date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  const time = today.getHours() + ":" + today.getMinutes();
  const dateTime = {date: date, time: time};
  return dateTime;
  }

  }
}
</script>

<style lang="css" scoped>

#game-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

#game-board {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

#board-one {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  /* padding-bottom: 1em; */
}

.card-icon {
  max-width: 11em;
  max-height: 11em;
  padding: 0.5em;
}

button {
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #60a3bc;
  padding: 15px;
  border-radius: 75px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
}

#hand-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: auto;
}

</style>
