<template>
  <section class="feed-item">
    <div class="video-container">
      <video autoplay loop muted>
        <source src="/face-test.webm" type="video/webm">
        Could not load user feed.
      </video>
    </div>
    <div class="info">
      <span class="name">Hayley Joyal</span>
      <span class="viewers">
        <span class="number">349</span> viewers</span>
    </div>
  </section>
</template>

<script>
  export default {

  }

</script>

<style scoped>
  .feed-item {
    padding-bottom: 4em;
  }

  .video-container {
    display: flex;
    justify-content: center;
    width: 100%;
    overflow: hidden;
  }

  video {
    max-height: 100vw;
  }

  .info {
    display: flex;
    box-sizing: border-box;
    padding: 1em 1.5em 0;
    justify-content: space-between;
    flex-flow: row nowrap;
    font-size: 12px;
  }

  .number {
    font-family: 'Sneak-Mono', monospace;
  }

  .viewers {
    text-decoration: underline;
  }

</style>
