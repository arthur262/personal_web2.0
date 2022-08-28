
<template>
  <div>
    <div class="ball" @click="details()">
      <div class="coverImage"></div>
      <div class="avroRecord"></div>
      <div class="audio_detail">
      <h3 class="text">歌词</h3>
      <a-progress v-model:percent="value1" />
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import api from "/src/assets/api/music.ts";

import router from '../../router/index';
export default defineComponent( {
  setup() {
    const value1 = ref<number>(30);
    return {
      value1,
    };
  },

  data() {return{
    before:0,

    url:'',
    name:'',
    currentId:-1,
    coverImgUrl:'',
  }},
  created() {},
  watch: {},
  mounted: function () {
    //get the playlist
    // api.playlist_trayFn(this.before) .then(res => {
    //       const data = res.data
    //       if (data.code === 200) {
    //         let fulldata=data.playlists;
    //         this.setupcurrent(fulldata[1]);
    //         this.before=fulldata[9].updateTime;
    //       }
    //     });
      
  },
   methods:{
    setupcurrent(el:any){
      console.log(el)
      // api.hotSearchListFn(33894312).then(res=>{
      //   console.log(res.data);
      // })

      //https://music.163.com/song/media/outer/url?id=5347651276.mp3
    },
    details() {
      router.replace({ path: '/Music_CN' });
    }
  }
});
</script>

<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
  
}
.ball {
  position: fixed;
  bottom: 5vh;
  left: 4vw;
  display: flex;
}
.coverImage {
  height: 5vw;
  width: 5vw;
  z-index: 10;
  background-image: url("/Photo/A7M2(68).jpg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2px;
  border: 1px solid var(--boxColor);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
}
.avroRecord {
  height: 5vw;
  width: 5vw;
  z-index: 9;
  position: absolute;
  left:50%;
  background-image: url("/Photo/2023.png_300.png");
  background-repeat: no-repeat;
  background-size: cover;
  animation: rotation 3s linear infinite;
}

@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg)  ;
  }

  to {
    -webkit-transform: rotate(360deg)  ;
  }
}
.audio_detail{
  position: fixed;
  background-color: var(--boxColor);
  transform:translateX(10%);
  opacity:.7;
  height: 5vw;
    padding:.5vw 2vw .5vw 6vw;
  width:20vw;
  z-index:8;
  border-radius: 5.5ch;
}
</style>
