<template>
  <section class="feed">
    <!-- <Face></Face>
    <Face></Face>
    <Face></Face>
    <Face></Face>
    <Face></Face> -->
    <Face v-for="face in faces"  :name="face.name" :viewers="face.viewers" :filename="face.filename" :key="face.name" ></Face>
    <div class="end">
      <a href="#">
        <p>&uarr;</p>
        <p>&mdash;</p>
      </a>
    </div>
    <BottomBar></BottomBar>
  </section>
</template>

<script>
  import Face from '~/components/Face.vue'
  import UserFaceFeed from '~/components/UserFaceFeed.vue'
  import BottomBar from '~/components/BottomBar.vue'


  export default {
      data() {
    return {
      faces: require("../assets/js/faces.json")
    };
  },
    components: {
      Face,
      UserFaceFeed,
      BottomBar
    }
  }

</script>

<style scoped>

  .end {
    color: #888;
    width: 100%;
    text-align: center;
    margin: 2em 0 4em;
    font-size: 2em;
  }

  .end a {
    display: block;
    width: 1.5em;
    height: 100%;
    margin: auto;
  }

  .end a p {
    margin: 0;
    line-height: 0.45;
  }

  .view-select {
    position: fixed;
    bottom: 1em;
    right: 1em;
    padding: .25em .25em 0;
    width: 1.75em;
    box-sizing: border-box;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
