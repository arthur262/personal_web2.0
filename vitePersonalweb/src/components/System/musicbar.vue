<script lang="ts" setup></script>
<template>
  <div>
    <div class="ball">
      <div class="coverImage"></div>
      <div class="avroRecord"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.ball {
  position: fixed;
  bottom: 5vh;
  left: 4vw;
  display: flex;
}
.coverImage {
  height: 5vw;
  width: 5vw;
  z-index: 10;
  background-image: url("/Photo/A7M2(68).jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2px;
  border: 3px solid var(--box);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
}
.avroRecord {
  height: 5vw;
  width: 5vw;
  z-index: 9;
  position: absolute;
  left:50%;
  background-image: url("/Photo/2023.png_300.png");
  background-repeat: no-repeat;
  background-size: cover;
  animation: rotation 3s linear infinite;
}

@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg)  ;
  }

  to {
    -webkit-transform: rotate(360deg)  ;
  }
}
</style>
