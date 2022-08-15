<template>
  <div style="width: 100%; min-height: 100vh">
    <header class="background-image">
      <a-row type="flex" style="padding: 4vh 8vw 0 8vw">
        <a-col :flex="2">
          <router-link to="/Photograph">
            <img src="/public/Photo/Artsy.png" height="120" />
          </router-link>
        </a-col>
        <a-col :flex="2">
          <ul id="menu" ref="menu">
            <li>
              <router-link to="/Home" class="link"> Home</router-link>
            </li>
            <li>
              <router-link to="/Programmer" class="link"
                >Programmer
              </router-link>
            </li>
            <li>
              <router-link to="/Student" class="link"> Student</router-link>
            </li>
          </ul>
        </a-col>
      </a-row>

      <!-- <ul id="menu" ref="menu">
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
     <video  class="backpic" preload="auto" src="../../../public/video/序列 01.mp4"  playsinline autoplay muted> </video> -->
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
  mounted: function () {},
  methods: {
    menuloc() {
      let lefts =
        (window.innerWidth - this.$refs.menu.offsetWidth) / 1.95 + "px";
      this.$refs.menu.style.left = lefts;
    },
  },
};
</script>

<style scoped>
.background-image {
  min-height: 100vh;
  background-image: url("/Photo/A7M2\ \(1\).jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
#menu {
  list-style: none;
  display: flex;
  width: fit-content;
  float: right;
  opacity: 0;
  z-index: 10;
  animation: upswing 0.5s linear;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

.link {
  color: whitesmoke;
  font-size: 1.5rem;
  margin: 0 1vw;
  white-space: nowrap;
  font-family: "ivypresto-display";
}
#menu :hover a {
  color: rgba(245, 245, 245, 0.7);
  transition: 1s;
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
