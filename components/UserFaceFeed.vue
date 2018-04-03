<template>
  <section class="user-face-feed">
    <div class="vid-wrapper">
      <video id="video" v-bind:class="[page]" preload autoplay loop muted>
      </video>
      <div id="warning">
        <h4>Face not detected.</h4>
      </div>
    </div>
    <!-- <canvas id="canvas" class="no-face" width="320" height="568"></canvas> -->
  </section>
</template>

<script>
  const trackingData = require('../assets/js/tracking-data.json')
  if (process.BROWSER_BUILD) {
    require('tracking')
  }


  export default {
    props: ["page"],

    mounted() {
      // Check for webcam usage permission
      const constraints = {
        video: true
      };
      // Locate video element in DOM
      const video = document.querySelector('video');
      // Initiate stream
      function handleSuccess(stream) {
        video.srcObject = stream;
      }
      // If permission denied
      function handleError(error) {
        console.error('Reeeejected!', error);
      }

      navigator.mediaDevices.getUserMedia(constraints).
      then(handleSuccess).catch(handleError);

      // Initiate tracking.js
      window.onload = function () {
        var video = document.getElementById('video');
        // var warning = document.getElementById('warning');
        // var canvas = document.getElementById('canvas');
        // var context = canvas.getContext('2d');

        tracking.ViolaJones.classifiers.face = new Float64Array(trackingData.data)

        var tracker = new tracking.ObjectTracker("face");
        tracker.setInitialScale(10);
        tracker.setStepSize(.5);
        tracker.setEdgesDensity(0.05);
        tracking.track('#video', tracker, {
          camera: true
        });

        // Do things while tracking
        tracker.on('track', function (event) {
          // When track detects features, draw outlines on canvas element ('context')
          // context.clearRect(0, 0, canvas.width, canvas.height);
          // event.data.forEach(function (rect) {
          //   context.strokeStyle = '#a64ceb';
          //   context.strokeRect(rect.x, rect.y, rect.width, rect.height);
          //   context.font = '11px Helvetica';
          //   context.fillStyle = "#fff";
          //   context.fillText('x: '  rect.x  'px', rect.x  rect.width  5, rect.y  11);
          //   context.fillText('y: '  rect.y  'px', rect.x  rect.width  5, rect.y  22);
          // });
          if (event.data.length === 0) {
            // No face
            console.log("no face")
            video.classList.add("hidden")
            warning.classList.remove("hidden")
          } else {
            // Yes face
            console.log("yes face")
            video.classList.remove("hidden")
            warning.classList.add("hidden")
            // event.data.forEach(function (rect) {
            // });
          }
        });
      };
    },
  }

</script>

<style scoped>
  .user-face-feed {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: -10;
  }

  .vid-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
  }

  video.index {
    filter: grayscale(1) opacity(.2) contrast(.5);
  }

  /* canvas {
    position: absolute;
    left: 0;
    top: 0;
  } */

  #warning {
    position: relative;
    top: calc(-100vh + 2em);
  }

  .hidden {
    visibility: hidden;
  }

</style>
