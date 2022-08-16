<script setup lang="ts">
import { DoubleRightOutlined } from "@ant-design/icons-vue";
</script>
<template>
  <div style="width: 100%; min-height: 100vh">
    <header class="background-image">
      <a-row type="flex" style="padding: 4vh 8vw 0 8vw">
        <a-col :flex="2">
          <router-link to="/Photograph">
            <img
              src="/public/Photo/Artsy.png"
              style="opacity: 0.7"
              height="120"
            />
          </router-link>
        </a-col>
        <a-col :flex="2">
          <ul id="menu" ref="menu" class="animation-container">
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
      <div class="themeword">
        <h2
          style="
            font-family: 'Times New Roman', Times, serif;
            letter-spacing: 0.333333em;
            font-size: 2.5em;
            white-space: nowrap;
            font-style: italic;
            margin: 0;
          "
          class="animation-container"
        >
          Travel
        </h2>
        <div style="margin: 0 auto; width: fit-content">
          <double-right-outlined
            :style="{ fontSize: '32px', transform: 'rotate(90deg)' }"
          />
        </div>
      </div>
    </header>
    <section>
      <div style="max-width: 140ch; margin: 0 auto">
        <secton>
          <div style="min-height: 110vh; padding-top: 6vh">
            <div
              class="doubleimge"
              style="
                padding: 4ch;
                padding: 2ch;
                border: 2px solid black;
                box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
                display: flex;
              "
            >
              <div></div>
              <div></div>
            </div>
          </div>
        </secton>
      </div>
    </section>
    <div style="min-height: 110vh; background-color: black; position: relative">
      <div
        style="
          background: url('/Photo/DSC00528-5.jpg') no-repeat;
          width: 100%;
          height: 110vh;
          background-position: center;
          background-size: cover;
          position: absolute;
          background-attachment: fixed;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <div style="height: fit-content; width: 80vw">
          <span style="float: right">
            <h1
              style="
                color: whitesmoke;
                font-size: 4.5rem;
                margin:0;
                
                white-space: nowrap;
                font-family:futura-pt;
                font-style:normal;
                font-weight:100;
                letter-spacing: 0.233333em;
              "
            >
              Emotion
            </h1>
            <h4
              style="
                color: whitesmoke;
                font-size: 1.5rem;
                margin: 2vw 1vh;
                white-space: nowrap;
                font-family: Crimson Text;
                letter-spacing: 0.133333em;
              "
            >
              profile
            </h4>
          </span>
        </div>
      </div>
    </div>
    <section></section>

    <video
      class="videos"
      src="/video/序列 01.mp4"
      playsinline
      autoplay
      muted
    ></video>
    <a-back-top />
  </div>
</template>

<script lang="ts">
export default {
  components: { DoubleRightOutlined },
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
.videos {
  width: 100%;
}
.doubleimge :nth-child(1) {
  background: url("/Photo/A7M2\ \(208\).jpg") no-repeat;
  width: 50%;
  height: 80vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
.doubleimge :nth-child(2) {
  background: url("/Photo/_DSC3902.jpg") no-repeat;
  width: 50%;
  height: 80vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}

.themeword {
  position: absolute;
  bottom: 1vh;
  left: 46%;
}
.background-image {
  min-height: 100vh;
  background-image: url("/Photo/A7M2\ \(1\).jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
#menu {
  list-style: none;
  display: flex;
  width: fit-content;
  float: right;

  z-index: 10;
}

.link {
  color: whitesmoke;
  font-size: 1.5rem;
  margin: 0 1vw;
  white-space: nowrap;
  font-family: Crimson Text;
  letter-spacing: 0.133333em;
}
#menu :hover a {
  color: rgba(245, 245, 245, 0.5);
  transition: 1s;
}

.animation-container {
  opacity: 0;
  animation: upswing 0.5s linear;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
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
