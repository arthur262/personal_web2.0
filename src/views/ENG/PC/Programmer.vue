<template>
  <div
    style="width: 100%; min-height: 100vh; background-color: black"
    class="backgroundtheme"
  >
    <Nav class="nav" />
    <selfCard class="card"/>
    <canvas id="canvas" width="200" height="300">
      
    </canvas>
    
  </div>
</template>

<script lang="ts">
import Nav from "/src/components/System/menu.vue";
import { init } from "/src/assets/api/draw_star.js";
import selfCard from "/src/components/Programmer/intro_card.vue"
export default {
  mounted() {
    init();
  },
  data() {
    return {
      welcomemessage: "",
      welcomeText: "Hello world \n XXX",
    };
  },
  methods: {
  },
  components: { Nav,selfCard },
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
.card{
  z-index:10;position:absolute;
  top:15vh;
  left:10vw;
}
</style>