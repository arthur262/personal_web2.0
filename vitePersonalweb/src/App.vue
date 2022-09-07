<script  lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

</script>

<template>
  <div>
    <router-view />
     <!-- <musicbar /> -->
  </div>
</template>
<script lang="ts">
import musicbar from "/src/components/System/musicbar.vue";
export default {
  components: {
    musicbar,
  },
  }
</script>


<style >
.text {
  color: var(--textColor)!important;
  transition:color .3s ease-in-out !important;
}
.backgroundtheme{
  background-color: var(--wholeBackground) !important;
  transition:background-color 0.5s ease-in-out !important;
}
.box{
  background-color: var(--boxColor) !important;
  transition:background-color .3s ease-in-out !important;
}
.shadow{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  padding: 0;
  margin: 0;
  max-width:100%;
  min-height: 100vh;
}
body {
  place-items:  normal start ;
  display:block ;
  height: fit-content!important;
}
:root{
   padding: 0;
  margin: 0;
}

</style>
