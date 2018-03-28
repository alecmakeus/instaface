<template>
  <section id="__ob_one">
    <UserFaceFeed :page="page">
    </UserFacefeed>
    <div class="overlay-text">
      <h1 id="advBtn">
        <nuxt-link to="feed" class="btn">
          &rarr;
        </nuxt-link>
      </h1>
      <h4>Please show your face.</h4>
    </div>
  </section>
</template>

<script>
  import UserFaceFeed from '~/components/UserFaceFeed.vue'


  export default {
    data() {
      return {
        page: "index"
      };
    },
    props: ["layout"],
    layout: 'onboarding',
    components: {
      UserFaceFeed
    }
  }

</script>

<style scoped>
  #__ob_one {
    padding-top: 14vh;
  }

  #advBtn {
    margin: 0 0 2.75em;
    font-size: 2em;
  }

  a.btn {
    width: 1.5em;
    height: 1.5em;
  }

  .overlay-text {
    position: relative;
    /* z-index: 10; */
  }

  .user-face-feed {
    position: absolute;
    top: 0;
    left: 0;
  }

</style>
