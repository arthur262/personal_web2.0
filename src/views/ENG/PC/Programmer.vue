<template>
  <div
    style="width: 100%; min-height: 100vh; background-color: black"
    class="backgroundtheme"
  >
  <!-- <a-modal v-model:visible="visible" title="Construction page" @ok="handleOk">
      <h4>This page is under construction, the current page does not represent the final quality</h4>
    </a-modal> -->
    <Nav class="nav" />
    <canvas id="canvas" width="200" height="300"></canvas>
    <selfCard class="card"></selfCard>
  </div>
</template>

<script lang="ts">
import Nav from "/src/components/System/menu.vue";
import { init } from "/src/assets/api/draw_star.js";
import selfCard from "/src/components/Programmer/intro_card.vue";
import { ref } from 'vue';

export default {
  setup() { 
    const visible = ref(true);
    const showModal = () => {
      visible.value = true;
    };
    const handleOk = e => {
      visible.value = false;
    };
    return {
      visible,
      showModal,
      handleOk,
    };
  },
  mounted() {
    init();
    
  },
  data() {
    return {

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
.card {
  z-index: 10;
  position: absolute;
  top: 10vh;
  left: 10vw;
}
</style>
