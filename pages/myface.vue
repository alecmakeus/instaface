<template>
  <section class="my-face">
    <div class="video-container">
      <UserFaceFeed></UserFaceFeed>
    </div>
    <div class="info">
      <span class="name">Alec Marcus</span>
      <span class="viewers">
        <span class="number">0</span> viewers</span>
    </div>
    <BottomBar></BottomBar>
  </section>
</template>

<script>
  import UserFaceFeed from '~/components/UserFaceFeed.vue'
  import BottomBar from '~/components/BottomBar.vue'

  export default {
    components: {
      UserFaceFeed,
      BottomBar
    }
  }

</script>

<style scoped>
  /* .my-face {
    padding-bottom: 4em;
  } */

  .video-container, .video-container * {
    height: 80vh;
    width: 100%;
    overflow: hidden;
  }

  .info {
    display: flex;
    box-sizing: border-box;
    padding: 1em 1.5em 4em;
    justify-content: space-between;
    flex-flow: row nowrap;
    font-size: 12px;
  }

  .name, .viewers {
    background: #fff;
  }

  .number {
    font-family: 'Sneak-Mono', monospace;
  }

  .viewers {
    text-decoration: underline;
  }

  .nav-btn-right {
    visibility: hidden;
  }

</style>
