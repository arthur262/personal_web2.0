
<template>
  <div>
    <div class="ball" @click="details()">
      <div class="coverImage" :style="'background-image: url(' + coverImgUrl + ')'" />
      <div class="avroRecord" />

      <div class="audio_detail">
        
       <h3 class="text" style="margin-bottom:0;text-align: center;">歌词</h3>
       <audio :muted="mute" :src="url" controls ></audio>
        
        

      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import api from "/src/assets/api/music.ts";
import axios from "axios";

import router from '../../router/index';
export default defineComponent({
  setup() {
     const value1 = ref<number>(30);
    return {
      value1,
    };
  },

  data() {
    return {
      //用于储存循环的歌单
      DataBase: '',
      //当前歌曲在歌单中的序列
      current_index: -1,


      //用来储存当前所放的歌曲的信息
      url: '',
      name: '',
      currentId: -1,
      //解释当前歌曲播放到几秒了
      time: -1,
      totalTime: -1,
      coverImgUrl: '',
      mute: true,
      lyrics:[],
    }
  },
  created() { },
  watch: {},
  mounted: function () {
    this.getdata();
  },
  methods: {
    //根据当前的歌曲id获取歌曲全部信息
    setupcurrent(el: any) {
      api.hotSearchListFn(el.id).then(res => {

        if (res.status == 200) {
          this.currentId=res.data.data[0].id;
          this.url = res.data.data[0].url;
          this.totalTime = res.data.data[0].time;
        }
      });
      api.hitSearchDetail(el.id).then((res=>{
         if (res.status == 200) {
          this.name=res.data.songs[0].al.name;
          this.coverImgUrl=res.data.songs[0].al.picUrl;
        }
      }));

      api.lyricFn(el.id).then(res => {
        if (res.status == 200) {
          let lyrics_temp=""+ res.data.lrc.lyric;
          this.lyrics= lyrics_temp.split("\n");
        }
      })
    },

    swiAudioFrmList() {
      //还没开始
      if (this.current_index < 0) {
        this.current_index = 0;
        this.setupcurrent(this.DataBase[this.current_index]);
      }
    },

    //获取我喜欢的歌的歌单
    getdata() {
      // axios
      //   .get(
      //     basicURL,
      //     {
      //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //     }
      //   )
      //   .then((response) => {
      //     this.DataBase = response.data;
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      axios
        .get("/data/Music_list.json")
        .then((response) => {
          this.DataBase = response.data.list;
          this.swiAudioFrmList();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    //跳转到专业的
    details() {
      
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
  height:fit-content;
}

.coverImage {
  height: 5vw;
  width: 5vw;
  z-index: 10;

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
  left: 50%;
  background-image: url("/Photo/2023.png_300.png");
  background-repeat: no-repeat;
  background-size: cover;
  animation: rotation 3s linear infinite;
}

@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}

.audio_detail {
  position: fixed;
  transform: translateX(10%);
  opacity: .7;
  height: 5vw;
  background-color:var(--boxColor);
  padding: .5vw 2vw .5vw 6vw;
  width: fit-content;
  height:fit-content;
  z-index: 8;
  border-radius: 1.5ch;
}
</style>
