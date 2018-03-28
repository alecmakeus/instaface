<template>
  <section class="feed">
    <Face></Face>
    <Face></Face>
    <Face></Face>
    <Face></Face>
    <Face></Face>
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
  .end {
    color: #888;
    width: 100vw;
    text-align: center;
  }

</style>
