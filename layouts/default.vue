<template>
  <div id="__app">
    <NavBar :layout="layout"></NavBar>
    <nuxt/>
  </div>
</template>

<script>
  import NavBar from '~/components/NavBar.vue'

  export default {
    data() {
      return {
        layout: "default"
      };
    },
    components: {
      NavBar
    }
  }

</script>

<style scoped>

</style>
