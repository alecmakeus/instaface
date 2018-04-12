<template>
  <section class="my-face">
    <UserFaceFeed></UserFaceFeed>
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
  .info {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 1em 1.5em 5em;
    justify-content: space-between;
    flex-flow: row nowrap;
    font-size: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .name,
  .viewers {
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
