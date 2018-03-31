<template>
  <section class="feed">
    <Face></Face>
    <Face></Face>
    <Face></Face>
    <Face></Face>
    <Face></Face>
    <div class="grid"><img src="/ico/grid.svg" alt="▓"></div>
    <div class="end">
      <h1>
        <a href="#">&mdash;</a>
      </h1>
    </div>
  </section>
</template>

<script>
  import Face from '~/components/Face.vue'
  import UserFaceFeed from '~/components/UserFaceFeed.vue'


  export default {
    components: {
      Face,
      UserFaceFeed
    }
  }

</script>

<style scoped>
  .feed {
    overflow: hidden;
  }
  .end {
    color: #888;
    width: 100vw;
    text-align: center;
  }

  .grid {
    position: fixed;
    bottom: 1em;
    right: 1em;
  }

</style>
