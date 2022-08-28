<script lang="ts" setup></script>
<template>
  <div>
    <div class="ball">
      <div class="coverImage"></div>
      <div class="avroRecord"></div>
      <div class="audio_detail">
      <h3 class="text">歌词</h3>
      <a-progress v-model:percent="value1" />
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent( {
  setup() {
    const value1 = ref<number>(30);

    return {
      value1,
    };
  },
});
</script>

<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
  
}
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
  border: 1px solid var(--boxColor);
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
.audio_detail{
  position: fixed;
  background-color: var(--boxColor);
  transform:translateX(10%);
  opacity:.7;
  height: 5vw;
    padding:.5vw 2vw .5vw 6vw;
  width:20vw;
  z-index:8;
  border-radius: 5.5ch;
}
</style>
