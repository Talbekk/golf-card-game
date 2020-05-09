<template lang="html">
  <div id="game-rules">
    <h4>The Deal:</h4>
    <p>
      Each player is dealt 4 cards face down from the deck. The remainder of the cards are placed face down, and the top card is turned up to start the discard pile beside it. Players arrange their 4 cards in a row face down. At the start of a round, the player can look at two cards but only for a short time.
    </p>
    <h4>The Game:</h4>
    <p>
      The object is for players to have the lowest value of the cards in front of them by either swapping them for lesser value cards or by pairing them up with cards of equal rank. A game is nine "holes" (deals), and the player with the lowest total score is the winner.
    </p>
      Beginning with the player to the dealer's left, players take turns drawing single cards from either the stock or discard piles. The drawn card may either be swapped for one of that player's 4 cards, or discarded. If the card is swapped for one of the face down cards, the card swapped in remains face up. If the player choose not to take the card, they must turn over one of their own. The round ends when all of a player's cards are face-up.
    </p>
    <h4>Gameplay:</h4>
    <ul>
      <li>Once cards have been dealt and at the beginning of the round, click a card to reveal it for a short time.</li>
      <li>To lock in a card: Double click the chosen card.</li>
      <li>To swap a card: Click the face up card you want and then click the card in your hand that you want to switch.</li>
      <li>If you change your mind after selecting the top card from the pile, just click it again to cancel the swap.</li>
    </ul>
    <h4>Special Cards & Combinations:</h4>
    <ul>
      <li><b>King:</b> 0</li>
      <li><b>5:</b> -5</li>
      <li><b>Pair:</b> 0</li>
      <li><b>4 of a kind:</b> -30</li>
    </ul>
    <h4>Useful Links:</h4>
    <ul>
      <li><a href="https://www.pagat.com/draw/golf.html" target="_blank">Four Card Golf</a></li>
      <li><a href="https://www.youtube.com/watch?v=I6xcdO7qKsU" target="_blank">Video Walkthrough</a></li>
    </ul>
    <p>Sidenote: There are many variations of golf. This is but my own interpretation of the great game.</p>
  </div>
</template>

<script>

export default {
  name: "game-rules"
}
</script>

<style lang="css" scoped>

#game-rules {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  margin: 2%;
  padding: 15px 30px;
  border: solid #4b8a4a 1px;
  border-radius: 5px;
  background-color: #4b8a4a;
  background-size: cover;
  color: #333;
  box-shadow: 0 30px 80px 10px rgb(0,0,0,0.8);
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
