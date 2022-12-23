<template>
  <div>
    <div class="container animation-container">
      <!-- left size -->
      <div style="grid-row: 1 / span 7; grid-column: 2/2" class="centered">
        <div style="height:fit-content;">
        <p class="text_1 clip">
           &lt;&emsp; > <br /></p>
        <div
          style="
            width: 60px;
            margin: 0 auto;
            line-height: 3rem;
          "
        >
        <p class="text_1 clip">
          Front end
        </p>
        </div>

        <p class="text_1 clip">
          &lt; / > <br /></p>
          </div>
      </div>
      <!-- top middle -->
      <div style="grid-row: 1 / span 1; grid-column: 3/6" class="centered">
        <p class="text_3 clip">Hello i am Arthur</p>
      </div>
      <!-- center -->
      <div style="grid-row: 2 / span 4; grid-column: 3/6; padding: 2rem">
        <p id="hello" class="text_4 clip"></p>
      </div>
      <div style="grid-row: 6 / span 2; grid-column: 3/5">3</div>
      <div style="grid-row: 6 / span 2; grid-column: 5/6">4</div>

      <div style="grid-row: 1 / span 3; grid-column: 6/7">1</div>
      <div style="grid-row: 4 / span 4; grid-column: 6/7">1</div>
    </div>
  </div>
</template>

<script lang="ts">
import { setword } from "/src/assets/api/common_api.ts";
export default {
  mounted() {
    setword();
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 14% 14% 14% 13% 14% 14% 14%;
  grid-template-rows: 14% 14% 14% 13% 14% 14% 14%;
  column-gap: 10px;
  row-gap: 15px;
  width: 80vw;
  height: 70vh;
}
.container div {
  overflow: hidden;
  opacity: 0.8;
  border-radius: 1.5ch;
  background-color: #424245;
}
.animation-container {
  opacity: 0;
  animation: swing 0.5s ease-in-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes swing {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.centered {
  display:flex;justify-content: center;
}
.text_1 {
  font-weight: bolder;
  word-wrap: break-word;
  font-size: 4.5rem;
  background-image: linear-gradient(180deg, green,green );
}

.text_3 {
  font-weight: bolder;
  font-size: 3rem;
  background-image: linear-gradient(90deg, #c0c0c0, whitesmoke);
}
.text_4 {
  font-size: 2.2em;
  padding: 2ch 1ch;
  font-weight: bolder;
  letter-spacing: 0.1em;
  font-style: oblique;
  overflow: hidden;
  background-image: linear-gradient(135deg, #f02fc2, whitesmoke, #6094ea);
}
.clip {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  background-clip: text;
  display: initial;
  margin: 0 auto;
}
</style>
