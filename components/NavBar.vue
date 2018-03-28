<template>
  <nav class="topbar">
    <div v-if="layout === 'default'" class="nav-btn-left">
      <h3>
        <button onclick="javascript:history.back(-1)">&larr;</button>
      </h3>
    </div>
    <div class="appname">
      <h1>
        INSTAFACE
      </h1>
    </div>
    <div v-if="layout === 'default'" class="nav-btn-right">
      <h3>
        <nuxt-link to="myface" >+</nuxt-link>
      </h3>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["layout"]
};
</script>

<style scoped>
  nav {
    font-size: 1.25em;
    box-sizing: border-box;
    padding: 1.25em 0 .75em;
    display: flex;
    justify-content: space-around;
  }

.nav-btn-left h3, .nav-btn-right h3 {
  line-height: 1.4em;
}

  h1, h3 {
    margin: 0;
    text-align: center;
  }

  button {
    font-size: 1em;
    font-weight: inherit;
    display: inline;
    margin: 0;
    padding: 0;
  }

</style>
