<template lang="html">
    <div class="popup-content">
     <p>~Hey</p>
     <p>~Hey dfgsfdgdfg sdfg dfg dsfg dfg dsg df gdsf gdf gd sf gfd gds fg fd gfd</p>
     <p>~Hey lfafdsfdfgadsgdsg dg dsddgsdfadggdsfafds</p>
     <p>~Hey dgfsagggfdgfdgfgfdgsdffgsfdgfdsg</p>
     <p>~Hey</p>
     <p>~Hey</p>

    </div>
</template>

<script>

import {eventBus} from '../main.js';

export default {
  name: "popup",
  data(){
    return{
    }
  }
}
</script>

<style lang="css" scoped>

    .popup-content {
      z-index: 1;
      margin: 0 auto;
      height: 500px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    }

</style>  