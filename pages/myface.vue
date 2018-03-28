<template>
  <section class="feed-item">
    <div class="video-container">
      <UserFaceFeed></UserFaceFeed>
    </div>
    <div class="info">
      <span class="name">Alec Marcus</span>
      <span class="viewers">
        <span class="number">0</span> viewers</span>
    </div>
  </section>
</template>

<script>
  import UserFaceFeed from '~/components/UserFaceFeed.vue'

  export default {
    components: {
      UserFaceFeed
    }
  }

</script>

<style scoped>
  .feed-item {
    padding-bottom: 4em;
  }

  .video-container, .video-container * {
    height: 80vh;
    width: 100vw;
    overflow: hidden;
  }

  .info {
    display: flex;
    box-sizing: border-box;
    padding: 1em 1.5em 0;
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

  .user-face-feed {
    position: absolute;
    top: 0;
    z-index: -10;
    height: 100%;
  }

  .nav-btn-right {
    visibility: hidden;
  }

</style>
