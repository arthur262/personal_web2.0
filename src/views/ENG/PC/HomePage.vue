<script lang="ts" setup></script>

<template>
  <div>
    
    <div class="container" 
    :style="'background-image: url(' +dark_Img + ')'"
    >
    <video
        class="videos"
        src="/video/dalhousie.mp4"
        loop
        playsinline
        autoplay
        muted
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
      light_Img: "",
      dark_Img: "",
      theme: "",
    };
  },
  mounted() {
    if (this._isMobile()) {
      this.$router.replace("/Home_M");
    }
    this.getdata();
    language_selector();
    
  },
  methods: {
    getdata() {
      axios
        .get("/data/Photo_Src.json")
        .then((response) => {
          this.light_Img = response.data.Homebackground.light;
          this.dark_Img = response.data.Homebackground.dark;
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
  top: calc(30%/2);
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
