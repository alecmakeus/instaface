<template>
  <section id="index">
    <UserFaceFeed :page="page">
    </UserFacefeed>
    <div class="overlay-text">
      <h3 class="about" >Watch others <br>watch you <br>watch others.</h3>
      <h1 id="advBtn">
        <nuxt-link to="feed" class="btn">
          &rarr;
        </nuxt-link>
      </h1>
      <h4 class="instructions" >Please show your face.</h4>
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
  #index {
    padding-top: 14vh;
    width: 100%;
  }

  #advBtn {
    font-size: 2em;
  }

  a.btn {
    width: 1.5em;
    height: 1.5em;
  }

  .overlay-text {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    padding: 3em;
  }

  .about {
    transform: translateY(-7em);
  }

  .instructions {
    position: absolute;
    bottom: 2em;
  }

</style>
