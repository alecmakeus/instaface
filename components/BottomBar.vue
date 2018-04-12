<template>
  <nav class="bottom-bar">
    <!-- <button onclick="javascript:history.back(-1)">&larr;</button> -->
    <button>
      <nuxt-link to="/">&larr;</nuxt-link>
    </button>
    <button>
      <nuxt-link to="feed">
        <img src="/ico/inline.svg" id="feed">
      </nuxt-link>
    </button>
    <button>
      <nuxt-link to="myface">
        <img src="/ico/face.svg" id="face">
      </nuxt-link>
    </button>
  </nav>
</template>

<script>
  export default {

  }

</script>

<style scoped>
  .bottom-bar {
    width: 100%;
    height: 3em;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
  }

  .bottom-bar button {
    font-size: 2em;
    width: 33.33333%;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* .bottom-bar div>* {
    width: 100%;
    height: 100%;
  } */

  #face {
    height: 1em;
  }

</style>
