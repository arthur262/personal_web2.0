<script setup lang="ts">
import { DoubleRightOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";
</script>
<template>
  <div style="width: 100%; min-height: 100vh;" class="backgroundtheme">
    <section>
      <a-carousel autoplay :dots="dos" style="z-index: 1">
        <div v-for="iteam in DataBase" :key="iteam" class="background-image">
          <img
            :src="iteam"
            style="height: 100vh; width: 100vw; position: absolute"
          />
        </div>
      </a-carousel>

      <header style="position: absolute; width: 100%; height: 100vh; top: 0">
        <Nav/>
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
            class="animation-container text"
            ref="travel"
          >
            Travel
          </h2>
          <div style="margin: 0 auto; width: fit-content">
            <double-right-outlined
              :style="{ fontSize: '32px' }"
              class="roundloop"
            />
          </div>
        </div>
      </header>
    </section>
    
    <section>
      <div style="max-width: 140ch; margin: 0 auto">
        <section>
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
        </section>
      </div>
    </section>

    <Photo_random :datas="ForRandom" />

    <section>
      <div
        style="min-height: 110vh; background-color: black; position: relative"
      >
        <div class="emotionimage">
          <div style="height: fit-content; width: 80vw">
            <span style="float: right">
              <h1
                style="
                  color: whitesmoke;
                  font-size: 4.5rem;
                  margin: 0;
                  white-space: nowrap;
                  font-family: futura-pt;
                  font-style: normal;
                  font-weight: 100;
                  letter-spacing: 0.233333em;
                "
              >
                ABOUT ME
              </h1>

              <h4>
                <router-link to="/Contact_EN" class="e-profile"> Contact me </router-link>
              </h4>
            </span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <video
        class="videos"
        src="https://arthur1.oss-us-west-1.aliyuncs.com/source/video/dalhousie.mp4"
        loop
        playsinline
        autoplay
        muted
      ></video>
    </section>
    
    <a-back-top />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import axios from "axios";
import Photo_random from "/src/components/Photo/Photo_random.vue";
import Nav from "/src/components/System/menu.vue";


export default {
  components: { DoubleRightOutlined,Nav, ArrowRightOutlined, Photo_random },
  setup() {
    const bottom = ref<number>(10);
    return {bottom};
  },
  data() {
    return {
      DataBase: [],
      ForRandom: [],
      dos: false,
    };
  },
  mounted: function () {
    this.getdata();
    this.absolutemiddle();
  },
  methods: {
    absolutemiddle() {
      let lefts =
        (window.innerWidth - this.$refs.travel.offsetWidth) / 1.95 + "px";
      this.$refs.travel.style.left = lefts;
    },
    getdata() {
      axios
        .get("/data/Photo_Src.json")
        .then((response) => {
          this.DataBase = response.data.background_image;
          this.ForRandom = response.data.showup_img;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.emotionimage {
  background: url("https://arthur1.oss-us-west-1.aliyuncs.com/source/Photo/2f15e8bf58afc597b49da57c086aee0.jpg")
    no-repeat;
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
}
.roundloop {
  animation: loopanimation;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-duration: 1s;
  transform: rotate(90deg);
}
@keyframes loopanimation {
  0% {
    transform: rotate(90deg) translateX(-5px);
    opacity: 1;
  }
  50% {
    transform: rotate(90deg) translateX(10px);
    opacity: 0.3;
  }
  100% {
    transform: rotate(90deg) translateX(-5px);
    opacity: 1;
  }
}
.e-profile {
  position: relative;
  color: whitesmoke;
  font-size: 1.5rem;
  white-space: nowrap;
  font-family: Crimson Text;
  letter-spacing: 0.133333em;
}
.e-profile:before {
  position: absolute;
  width: 0;
  left: 0;
  bottom: -0.1rem;
  content: "";
  transition: width 0.5s ease-in-out;
  -webkit-transition: width 0.5s ease-in-out;
  border-bottom: 2px solid #8eb8de;
}
.e-profile:hover:before {
  width: 125%;
}
.e-profile:hover {
  color: #8eb8de;
}
.videos {
  width: 100%;
  object-fit: contain;
}
#menu {
  list-style: none;
  display: flex;
  width: fit-content;
  float: right;
  z-index: 10;
}
.doubleimge :nth-child(1) {
   background: url(https://arthur1.oss-us-west-1.aliyuncs.com/source/Photo/A7M2_208.jpg);
  background-repeat:no-repeat;
  width: 50%;
  height: 80vh;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
.doubleimge :nth-child(2) {
  background: url(https://arthur1.oss-us-west-1.aliyuncs.com/source/Photo/_DSC3902.jpg);
    background-repeat:no-repeat;
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
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
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
  animation: swing 0.5s linear;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes swing {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
