<template>
  <nav class="bottom-bar">
    <div>
      <button onclick="javascript:history.back(-1)">&larr;</button>
    </div>
    <div>
      <nuxt-link to="myface">+</nuxt-link>
    </div>
    <div class="view-select">
      <button>
        <img src="/ico/grid.svg" id="grid" alt="▓">
        <img v-if="view === 'grid'" src="/ico/inline.svg" id="inline" alt="▓">
      </button>
    </div>
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

  .bottom-bar div {
    font-size: 2em;
    width: 33.33333%;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bottom-bar div > * {
    width: 100%;
    height: 100%;
  }

</style>
