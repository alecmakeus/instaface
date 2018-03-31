<template>
  <div id="__app">
    <NavBar :layout="layout"></NavBar>
    <!-- <BottomBar></BottomBar> -->
    <nuxt/>
  </div>
</template>

<script>
  import NavBar from '~/components/NavBar.vue'
  import BottomBar from '~/components/BottomBar.vue'

  export default {
    data() {
      return {
        layout: "default"
      };
    },
    components: {
      NavBar,
      BottomBar
    }
  }

</script>

<style scoped>

</style>
