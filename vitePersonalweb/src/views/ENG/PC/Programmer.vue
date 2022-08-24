<template>
  <div>
  <h1 class="text">Test</h1>
  <a-switch v-model:checked="mode" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import {changeLight,changeDark}from '../../assets/api/themechanger';
export default {
  setup() {
    const mode = ref<boolean>(true);
    return {
      mode,
    };
  },
  created() {
    let theme = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : 'light'
    document.documentElement.setAttribute('theme', theme)
  },
  watch: {
    mode:function (newData, oldData) {
      if(newData){
        changeLight();
      }else{
        changeDark();
      }
    }
  },

}
</script>

<style scoped>
.text {
  color: var(--boxColor);
}
</style>