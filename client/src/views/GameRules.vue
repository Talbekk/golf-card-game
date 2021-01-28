<template lang="html">
  <div class="game-rules">
    <h4 class="rules-header">The Deal:</h4>
    <p class="rules-text">
      Each player is dealt 4 cards face down from the deck. The remainder of the cards are placed face down, and the top card is turned up to start the discard pile beside it. Players arrange their 4 cards in a row face down. At the start of a round, the player can look at two cards but only for a short time.
    </p>
    <h4 class="rules-header">The Game:</h4>
    <p class="rules-text">
      The object is for players to have the lowest value of the cards in front of them by either swapping them for lesser value cards or by pairing them up with cards of equal rank. A game is nine "holes" (deals), and the player with the lowest total score is the winner.
    </p>
    <p class="rules-text">
      Beginning with the player to the dealer's left, players take turns drawing single cards from either the stock or discard piles. The drawn card may either be swapped for one of that player's 4 cards, or discarded. If the card is swapped for one of the face down cards, the card swapped in remains face up. If the player choose not to take the card, they must turn over one of their own. The round ends when all of a player's cards are face-up.
    </p>
    <h4 class="rules-header">Gameplay:</h4>
    <ul class="rules-list">
      <li class="rules-list-item">Once cards have been dealt and at the beginning of the round, click a card to reveal it for a short time.</li>
      <li class="rules-list-item">To lock in a card: Double click the chosen card.</li>
      <li class="rules-list-item">To swap a card: Click the face up card you want and then click the card in your hand that you want to switch.</li>
      <li class="rules-list-item">If you change your mind after selecting the top card from the pile, just click it again to cancel the swap.</li>
    </ul>
    <h4 class="rules-header">Special Cards & Combinations:</h4>
    <ul class="rules-list">
      <li class="rules-list-item"><b>King:</b> 0</li>
      <li class="rules-list-item"><b>5:</b> -5</li>
      <li class="rules-list-item"><b>Pair:</b> 0</li>
      <li class="rules-list-item"><b>4 of a kind:</b> -30</li>
    </ul>
    <h4 class="rules-header">Useful Links:</h4>
    <ul class="rules-list">
      <li class="rules-list-item"><a href="https://www.pagat.com/draw/golf.html" target="_blank">Four Card Golf</a></li>
      <li class="rules-list-item"><a href="https://www.youtube.com/watch?v=I6xcdO7qKsU" target="_blank">Video Walkthrough</a></li>
    </ul>
    <p class="rules-text">
      Sidenote: There are many variations of golf. This is but my own interpretation of the great game.
    </p>
  </div>
</template>

<script>

export default {
  name: "game-rules"
}
</script>

<style lang="css" scoped>

.game-rules {
  box-sizing: border-box;
  width: 90%;
  margin: 0 auto;
  border: 1px solid #000;
  padding: 1rem;
}

.rules-header {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.rules-text {
  font-size: 2rem;
}

.rules-list {
  margin-left: 1.5rem;

}

.rules-list-item {
  font-size: 1.5rem;
}

a,
a:link,
a:visited {
  color: #02419e;
}

a:hover,
a:active {
  color: #004dbf;
  text-decoration: none;
}

</style>
