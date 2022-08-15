<template>
  <div style="width: 100%; min-height: 100vh">
    <header >
    
      
      <ul id="menu" ref="menu">
        <li>
          <router-link
            to="/Programmer"
            class="link middle"
            >Codder
          </router-link>
        </li>
        <li>
          <router-link
            to="/Home"
            class="link middle"

          >
            Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/Student"
            class="link middle"
          >
            Student</router-link
          >
        </li>
      </ul>
     <video  class="backpic" preload="auto" src="../../../public/video/序列 01.mp4" loop playsinline autoplay muted> </video>
      
    </header>
    <section></section>
    <a-back-top />
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  setup() {
    
    return {};
  },
  data() {
    return {};
  },
  mounted: function () {
    let lefts=(window.screen.width- this.$refs.menu.offsetWidth)/2+"px";
    this.$refs.menu.style.left = lefts;
  },
  methods: {},
};
</script>

<style scoped>
#menu {
  position: absolute;
  list-style: none;
  display: flex;
  width: fit-content;
  padding: 1vh 0 0 0;
  opacity: 0;
  z-index: 10;
  left: 0;
  animation: upswing 0.5s linear;
  animation-delay: .5s;
  animation-fill-mode: forwards;
}

.link {
  color: transparent;
-webkit-text-stroke:2px rgba(0, 0, 0, 0.7);
  font-size: 3rem;
  font-weight:bolder;  
}
#menu :hover a {
  color: whitesmoke;
  -webkit-text-stroke:.5px rgba(0, 0, 0, 0.7);
  transition:1.5s;
  
}

.middle {
  margin: 0 1vw;
  text-transform: uppercase;
  font-family:"ivypresto-display";
}
.backpic{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit:cover;
  overflow:hidden;
  z-index: 1;
}



@keyframes upswing {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
