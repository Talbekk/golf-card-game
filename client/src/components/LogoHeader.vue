<template lang="html">
  <div id="game-header">
    <b-navbar toggleable="lg" variant="faded" type="light">
      <b-navbar-brand href="#">
        <img src="../assets/GameLogo.svg" height="75" alt=""/>
      </b-navbar-brand>
      <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item href="#">Leaderboard</b-nav-item>
      <b-nav-item href="#">Rules</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "logo-header"
}
</script>

<style lang="css" scoped>

.game-logo {
  max-width: 7em;
  max-height: 7em;
  padding-bottom: 2em;
}

</style>
