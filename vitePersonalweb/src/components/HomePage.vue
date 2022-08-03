<script lang="ts" setup>

</script>

<template>
  <div class="container">
    <div class="selfshoots"></div>
    <div class="Wordcontainer">
        <router-link to="/" class="link middle">Programmer</router-link>
        <router-link to="/" class="link middle">Student</router-link>
        <router-link to="/" class="link middle">Photographer</router-link>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  components:{

  }
  }
</script>

<style scoped>
.container {
  height:fit-content;
  padding-top: 3vh;
}
.selfshoots{
  background-image: url("http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png");
  width:50vw;
  height: 70vh;
  background-size: 100% 100%;
  margin: 2vh auto;
  transition: fadeIn 1s;
}
@keyframes fadeIn{
  0%{width:50vw;}
  100%{width: 90vw;}
}
.Wordcontainer {
  padding: 2vh 0;
  display: flex;
  margin: 0 auto;
  backdrop-Filter: "blur(20px)";
  width: fit-content;
}
.link {
  color: rgba(245,245,245,0.7);
  font-size: 3.5em;
  font-family: "Helvetica";
  font-weight: bold;
  transition: .4s;
}
.link:hover{
    color: rgba(245,245,245,1);
    margin:0 .4vw;
    
}
.middle {
    vertical-align: middle;
    margin: 0 .8vw ;
}
</style>
