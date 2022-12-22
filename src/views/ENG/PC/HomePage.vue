<script lang="ts" setup></script>

<template>
  <div>
    
    <div class="container" 
    >
    <video
        class="videos"
        src="https://arthur1.oss-us-west-1.aliyuncs.com/source/video/dalhousie.mp4"
        loop
        playsinline
        autoplay
        muted
        id="home_video"
      ></video>
      <selfCard class="content" />     
    </div>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import selfCard from "../../../components/Home/self-card.vue";
import { language_selector } from "/src/assets/api/language_detech";


export default {
  components: {
    selfCard,
  },
  data() {
    return {
      theme: "",
    };
  },
  mounted() {
    if (this._isMobile()) {
      this.$router.replace("/Home_M");
    }
    this.getdata();
    language_selector();
    this.mute();
    
  },
  methods: {
    getdata() {
      axios
        .get("/data/Photo_Src.json")
        .then((response) => {
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    mute() { 
      document.getElementById("home_video").muted = "muted";
    }
  },
};
</script>

<style scoped>
#canvas {width:100%; height:100%; margin:0px;}
.content {
  height: fit-content;
  position:absolute;
  padding: 0 3vw;
  vertical-align: middle;
  top: calc(30% / 2);
  right: 0px;
  z-index: 10;
}
.container {
  width: 100%;
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}
.container video {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
}
</style>
