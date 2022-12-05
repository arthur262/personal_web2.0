<template>
  <div
    
  >
    <div class="container animation-container ">
      <div style="grid-row: 1 / span 4; grid-column: 2/2" >1</div>
      <div style="grid-row: 5 / span 3; grid-column: 2/2">1</div>

      <div style="grid-row: 1 / span 1; grid-column: 3/6">2</div>
      <div style="grid-row: 2 / span 5; grid-column: 3/6">主要元素</div>
      <div style="grid-row: 7 / span 1; grid-column: 3/5">3</div>
      <div style="grid-row: 7 / span 1; grid-column: 5/6">4</div>

      <div style="grid-row: 1 / span 3; grid-column: 6/7">1</div>
      <div style="grid-row: 4 / span 4; grid-column: 6/7">1</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, auto);
  column-gap: 10px;
  row-gap: 15px;
  width: 80vw;
  height: 70vh;
}
.container div {
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
</style>