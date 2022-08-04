<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="selfshoots"></div>
    <div class="Wordcontainer">
      <a-row type="flex">
        <a-col :flex="2"
          ><router-link to="/" class="link middle"
          @mouseenter="mouseover(0)" @mouseleave="mouseLeave()"
            >Programmer</router-link
          ></a-col
        >
        <a-col :flex="2"
          ><router-link to="/" class="link middle"
          @mouseenter="mouseover(1)" @mouseleave="mouseLeave()"
            >Stock trader</router-link
          ></a-col
        >
        <a-col :flex="2"
          ><router-link to="/" class="link middle"
          @mouseenter="mouseover(2)" @mouseleave="mouseLeave()">
          Student</router-link></a-col
        >

        <a-col :flex="2"
          ><router-link to="/Photograph" class="link middle"
          @mouseenter="mouseover(3)" @mouseleave="mouseLeave()"
            >Photographer</router-link
          ></a-col
        >
      </a-row>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  components: {},
};
function mouseover(index:number):void{

}
function mouseLeave():void{

}
</script>

<style scoped>
.container {
  height: fit-content;
  padding-top: 3vh;
}
.selfshoots {
  background-image: url("http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png");
  width: 50vw;
  height: 70vh;
  background-size: 100% 100%;
  margin: 2vh auto;
  animation-duration: 1s;
  animation-name: fadeIn;
  animation-delay: 0.3s;
  opacity: 0;
  animation-fill-mode: forwards;
}
@keyframes fadeIn {
  0% {
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}
.Wordcontainer {
  padding: 2vh 0;
  display: flex;
  margin: 0 auto;
  backdrop-filter: "blur(20px)";
  width: fit-content;
}

/*  set up text */
.link {
  color: rgba(245, 245, 245, 0.7);
  font-size: 3.5em;
  font-family: "Helvetica";
  font-weight: bold;
  transition: 0.4s;
}
.link:hover {
  color: rgba(127, 146, 99, 1);
  margin: 0 0.4vw;
}
.middle {
  vertical-align: middle;
  margin: 0 0.8vw;
}
</style>
