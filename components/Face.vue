<template>
  <section class="feed-item">
    <div class="video-container">
      <video src="/face-test.webm" autoplay loop muted></video>
      <!-- <img src="https://picsum.photos/800" width="320" height="320" /> -->
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

  .video-container, .video-container * {
    height: 100vw;
    overflow: hidden;
  }

  video {
    transform: translateX(-20%)
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
