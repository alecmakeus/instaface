<template>
  <div id="__app_onboarding">
    <NavBar :layout="layout"></NavBar>
    <nuxt :layout="layout"/>
  </div>
</template>

<script>
  import NavBar from '~/components/NavBar.vue'

  export default {
    data() {
      return {
        layout: "onboarding"
      };
    },
    components: {
      NavBar
    }
  }

</script>

<style scoped>
  #__app_onboarding {
    color: #fff;
    width: 100vw;
    height: 100vh;
  }

  nav.topbar {
    padding-top: calc(50vh - 1.5em);
    position: relative;
    z-index: 100;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  div,
  span {
    text-align: center;
  }

</style>
