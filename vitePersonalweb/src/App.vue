<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Nav from "../src/components/NavBar.vue";
</script>

<template>
  <div>
  <Nav/>
    <router-view />
  </div>
</template>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  padding: 0;
  margin: 0;
}
body {
  place-items:  normal start ;
  display:block ;
}
:root{
   padding: 0;
  margin: 0;
  background-color:whitesmoke;
}
</style>
