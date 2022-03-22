<template lang="html">
  <div>
        <ul class="game-mode-list">
          <li class="game-mode-item" v-for="(game, index) in gameModes">
            <game-mode :game="game"/>
          </li>
        </ul>
  </div>
</template>

<script>
import { eventBus } from '../../main.js';
import GameMode from './GameMode.vue';

export default {
  name: 'game-mode-list',
  props: ['game'],
  data() {
      return {
    gameModes: [{ mode: "Single Player", holes: [3, 9, 18] }
            // { mode: "Multiplayer"}
    ]
      }
  },
    components: {
          "game-mode": GameMode
    }
  }
</script>

<style lang="css" scoped>

.game-mode-list {
    list-style: none;
    display: grid;
    align-items: center;
}

.game-mode-item {
  justify-self: center;
}

</style>