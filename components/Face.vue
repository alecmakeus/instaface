<template>
  <section class="feed-item">
    <div class="video-container">
      <video autoplay loop muted>
        <source :src="`/vid/${this.filename}`" type="video/webm">
      </video>
    </div>
    <div class="info">
      <span class="name">{{ name }}</span>
      <span class="viewers"><span class="number">{{ viewers }}</span> viewers</span>
    </div>
  </section>
</template>

<script>
    export default {
        props: ['name', 'viewers', 'filename'],
    };

</script>

<style scoped>
  .feed-item {
    padding-bottom: 4em;
  }

  .video-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 120vw;
    overflow: hidden;
  }

  video {
    width: 100vw;
    object-fit: cover;
  }

  .info {
    display: flex;
    box-sizing: border-box;
    padding: 1em 7vw 0;
    justify-content: space-between;
    flex-flow: row nowrap;
    font-size: 11px;
  }

  .number {
    font-family: 'Sneak-Mono', monospace;
  }

  .viewers {
    text-decoration: underline;
  }

</style>
