<template>
  <div
    style="width: 100%; min-height: 100vh; background-color: black"
    class="backgroundtheme"
  >
    <Nav class="nav" />
    <canvas id="canvas" width="200" height="300"></canvas>
    <div style="background-color:aliceblue;width:400px;height:400px">
      {{welcomemessage}}
    </div>
  </div>
</template>

<script lang="ts">
import Nav from "/src/components/System/menu.vue";
import { init } from "/src/assets/api/draw_star.js";
export default {
  mounted() {
    init();
    this.setword();
  },
  data() {
    return {
      welcomemessage: "",
      welcomeText: "Hello world \n XXX",
    };
  },
  methods: {
    setword() {
      var n = 1;
      var timer = setInterval((welcomemessage,welcomeText)=>{
       
        welcomemessage = welcomeText.substring(0, n);
        if (n === welcomeText.length) {
          clearInterval(timer);
        }
      
      }, 100);
    }
  },
  components: { Nav },
  created() {},
  watch: {},
};
</script>

<style scoped>
.text {
  color: var(--boxColor);
}
.nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
#canvas {
  z-index: 1;
}
</style>