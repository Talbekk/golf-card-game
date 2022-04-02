<template lang="html">
  <div class="game-container">
    <div id="game-board">
      <div id="next-button">
        <game-header :computerCards="computerCards" :playerCards="playerCards" :gameStatus="gameStatus" :scoreCard="scoreCard" :lockedCards="lockedCards" :counter="counter" :currentHole="currentHole" :gameMode="gameMode"></game-header>
      </div>
      <div v-bind:class="[isTutorialEnabled ? tutorialClass : nonTutorialClass]">
        <discard-pile v-if='discardPile' :discardPile='discardPile'></discard-pile>
        <card-deck :topCardStatus='topCardStatus' :counter='counter' :gameMode='gameMode'></card-deck>
        <top-card :topCard='topCard'></top-card>
        <info-box v-if='isTutorialEnabled'/>
      </div>
    </div>
    <div id="hand-container" v-if="playerCards && !viewLeaderBoard">
      <player :scoreCard="scoreCard" :counter='counter' :lockedCards='lockedCards' :playerCards='playerCards' :topCardSelected="topCardSelected" :userData="userData"></player>
      <computer v-if='gameMode==="vs-computer"' :scoreCard='computerScoreCard' :counter='counter' :lockedCards='lockedCards' :computerCards='computerCards' :topCardSelected="topCardSelected" :computerTotal='computerTotal'></computer>
    </div>
  </div>
</template>

<script>

import DiscardPile from '../components/gameplay/DiscardPile.vue';
import TopCard from '../components/gameplay/TopCard.vue';
import Player from '../components/player/Player.vue';
import Computer from '../components/computer/Computer.vue';
import GameHeader from '../components/gameplay/GameHeader.vue';
import ScoreCard from '../components/scores/ScoreCard.vue';
import CardDeck from '../components/gameplay/CardDeck.vue';
import InfoBox from '../components/gameplay/InfoBox.vue';
import {eventBus} from '../main.js';
import {db} from '../firebase.js';
import {leaderboardRef} from '../firebase.js';

export default {
  name: "game",
  props: ['gameDeck', 'userName', 'gameStatus', 'userData', 'gameMode'],
  data(){
    return {
      roundDeck: [], //round
      playerCards: [],
      computerCards: [], //round
      topCard: null, //round
      currentCard: null, //round
      playerTotal: 0, //round
      computerTotal: 0,
      counter: 0, //round
      currentHole: 1, //game,
      lockedCards: [], //round
      computerLockedCards: [],
      scoreCard: [], //game
      computerScoreCard: [],
      discardPile: [], //round
      gameMode: null,
      drawnCard: false, //round
      topCardStatus: false,
      viewLeaderBoard: false,
      topCardSelected: false,
      isTutorialEnabled: false,
      tutorialClass: "board-one__with-tutorial",
      nonTutorialClass: "board-one__without-tutorial"
    }
  },
  components: {
    "player": Player,
    "computer": Computer,
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
          this.playerTotal = -30;
      } else if(matchingCardValues.length === 1 & currentTopCard.value === "5"){
        this.playerTotal += this.calculateScore(currentTopCard.value);
      } else if (matchingCardValues.length === 1) {
        this.playerTotal -= this.calculateScore(currentTopCard.value);
      } else {
        this.playerTotal += this.calculateScore(currentTopCard.value);
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
    eventBus.$on('computer-card-reveal', (selectedCard) => {
      this.computerCards.find((card) => {
        if(card === selectedCard){
          card.lockedIn = true;
            let cardValue = card.value;
            let amount = this.calculateScore(cardValue);
            let matchingCardValues = this.computerLockedCards.filter(card => cardValue === card)
            if (matchingCardValues.length === 3){
              this.playerTotal = -30;
            }
        else if(matchingCardValues.length === 1 & cardValue === "5"){
        this.computerTotal += amount;
      } else if (matchingCardValues.length === 1) {
        this.computerTotal -= amount;
      } else {
          this.computerTotal += amount;
      }
      this.nextComputerRound(cardValue);
        }
      })
      this.counter += 1;  
    });
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
    eventBus.$on('deal-cards', () => {
      this.setupNewGame();
    }),
    eventBus.$on('view-leaderboard', () => {
      this.viewLeaderBoard = !this.viewLeaderBoard;
    }),
    eventBus.$on('top-card-selected', () => {
      this.topCardSelected = !this.topCardSelected;
    }),
      eventBus.$on('set-tutorial-mode', () => {
      this.isTutorialEnabled = !this.isTutorialEnabled;
    })
  },
  watch: {
    //round
    currentCard() {
      let cardValue = this.currentCard.value;
      let amount = this.calculateScore(cardValue);
      let matchingCardValues = this.lockedCards.filter(card => cardValue === card)
      if (matchingCardValues.length === 3){
          this.playerTotal = -30;
      }
        else if(matchingCardValues.length === 1 & cardValue === "5"){
        this.playerTotal += amount;
      } else if (matchingCardValues.length === 1) {
        this.playerTotal -= amount;
      } else {
          this.playerTotal += amount;
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
    if (this.counter === 4 && this.gameMode === 'single-player'){
      this.scoreCard.push(this.playerTotal);
    }
    else if (this.counter === 8 && this.gameMode === 'vs-computer'){
      this.scoreCard.push(this.playerTotal);
      this.computerScoreCard.push(this.computerTotal);
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
  newRoundDeck(){
    if(this.gameDeck.length > 0){
    let deck = []
       this.gameDeck.cards.forEach((card) => {
        deck.push(card);
      })
      return this.shuffleDeck(deck);
    }
  }
},
  methods: {
    //round
    async getCards(){ 
      await this.getRoundDeck();
      if (this.gameMode === "vs-computer") { 
       let playerHand = [];
       let computerHand = [];

       for (let counter = 0; counter < 8; counter++){
         if (counter % 2 !== 0){
            let card = this.roundDeck.shift();
            playerHand.push(card);
         } else {
            let card = this.roundDeck.shift();
            computerHand.push(card);
         }
      }
      this.playerCards = playerHand;
      this.computerCards = computerHand;
      this.playerCards.forEach((card) => {
        card.lockedIn = false;
      })
      this.computerCards.forEach((card) => {
        card.lockedIn = false;
      })

      } else if (this.gameMode === "single-player"){  
      let hand = [];
      for (let counter = 0; counter < 4; counter++){
        let card = this.roundDeck.shift();
        hand.push(card);
      }
      this.playerCards = hand;
      this.playerCards.forEach((card) => {
        card.lockedIn = false;
      })
      } else {
        console.log("failed");
      }
    },
    //round
    getRoundDeck(){
      const parsedData = JSON.parse(JSON.stringify(this.gameDeck));
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
      this.playerCards = [];
      this.computerCards = [];
      this.topCard = null;
      this.playerTotal = 0;
      this.computerTotal = 0;
      this.lockedCards = [];
      this.computerLockedCards = [];
      this.discardPile = [];
    },
    //app
    setupNewGame(){
      this.setupGame();
      this.scoreCard = [];
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
    nextComputerRound(value){
      this.drawTopCard();
      this.drawnCard = false;
      this.computerLockedCards.push(value);
      this.topCardStatus = false;
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

.game-container {
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-row-gap: 1.5rem;
}

#game-board {
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
              0 2px 4px rgba(0,0,0,0.07), 
              0 4px 8px rgba(0,0,0,0.07), 
              0 8px 16px rgba(0,0,0,0.07),
              0 16px 32px rgba(0,0,0,0.07), 
              0 32px 64px rgba(0,0,0,0.07);
  display: grid;
  grid-template-rows: minmax(60px, min-content) 1fr;
}

.board-one__without-tutorial {
  display: grid;
  grid-column-gap: .2rem;
  padding: .5rem;
  grid-template-columns: repeat(3, 1fr);
}

.board-one__with-tutorial {
  display: grid;
  grid-column-gap: .2rem;
  padding: .5rem;
  padding-top: 0;
  grid-template-columns: repeat(4, 1fr);
}

.card-icon {
  max-width: 11em;
  max-height: 11em;
  padding: 0.5em;
}

.game-sub-section-header {
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
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
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-flow: column;
  padding: .5rem;
  padding-bottom: 0;
}

p {
  color: #000;
}

</style>
