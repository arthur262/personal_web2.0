<script setup></script>
<template>
  <div style="background-color:#242424;">
    <div class="container">
        <h3 style="vertical-align: middle;
    margin: 0 1vw !important;">As</h3>
        <router-link to="/" class="link middle">Myself</router-link>
        <router-link to="/" class="link middle">Programmer</router-link>
        <router-link to="/" class="link middle">Student</router-link>
        <router-link to="/" class="link middle">Photographer</router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 2vh 0;
  display: flex;
  margin: 0 auto;
  width: fit-content;
  backdrop-Filter: "blur(20px)";
}
.link {
  color: whitesmoke;
  font-size: large;
  transition: .4s;
}
.link:hover{
    color: rgba(245,245,245,0.7);
    
}
.middle {
    vertical-align: middle;
    margin: 0 .7vw ;
}
</style>
