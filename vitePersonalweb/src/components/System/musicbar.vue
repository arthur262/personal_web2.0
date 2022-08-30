<template>
  <div>
    <div class="ball" @click="details()">
      <div
        class="coverImage"
        :style="'background-image: url(' + coverImgUrl + ')'"
      />
      <div class="avroRecord" />

      <div class="audio_detail">
        <a-row type="flex">
          <a-col :flex="2"><p class="text" style="margin-bottom: 0;">{{name}}:</p>  </a-col>
          <a-col :flex="10">
        <h3 class="text" style="margin-bottom: 0; text-align: center">歌词</h3>
        </a-col>
        </a-row>
        <!-- 自定义播放器 -->
        <a-row type="flex" v-if="false">
          <a-col :flex="2">
            <span v-show="play">
              <svg
                t="1661873927759"
                class="icon text"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2370"
                width="28"
                height="28"
                
              >
                <path
                  d="M128 138.666667c0-47.232 33.322667-66.666667 74.176-43.562667l663.146667 374.954667c40.96 23.168 40.853333 60.8 0 83.882666L202.176 928.896C161.216 952.064 128 932.565333 128 885.333333v-746.666666z"
                  fill="#3D3D3D"
                  p-id="2371"
                ></path>
              </svg> </span
            ><span v-show="!play"
              ><svg
                t="1661873956808"
                class="icon text"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="3348"
                width="28"
                height="28"
              >
                <path
                  d="M307 955.7H198.5c-31.8 0-57.6-25.8-57.6-57.6V125.9c0-31.8 25.8-57.6 57.6-57.6H307c31.8 0 57.6 25.8 57.6 57.6v772.2c0 31.8-25.8 57.6-57.6 57.6zM825.5 955.7H717c-31.8 0-57.6-25.8-57.6-57.6V125.9c0-31.8 25.8-57.6 57.6-57.6h108.5c31.8 0 57.6 25.8 57.6 57.6v772.2c0 31.8-25.8 57.6-57.6 57.6z"
                  fill="#666666"
                  p-id="3349"
                ></path></svg
            ></span>
          </a-col>
          <a-col :flex="8">
            <a-slider id="test" v-model:value="value1" />
          </a-col>
          <a-col :flex="2"><p class="text">{{totalTime-time}}</p></a-col>
        </a-row>
        <audio :muted="mute" :src="url" controls></audio>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import api from "/src/assets/api/music.ts";
import axios from "axios";

import router from "../../router/index";
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
      DataBase: "",
      //当前歌曲在歌单中的序列
      current_index: -1,
      play: true,

      //用来储存当前所放的歌曲的信息
      url: "",
      name: "",
      currentId: -1,
      //解释当前歌曲播放到几秒了
      time: -1,
      totalTime: -1,
      coverImgUrl: "",
      mute: true,
      lyrics: [],
    };
  },
  created() {},
  watch: {},
  mounted: function () {
    this.getdata();
  },
  methods: {
    //根据当前的歌曲id获取歌曲全部信息
    setupcurrent(el: any) {
      api.hotSearchListFn(el.id).then((res) => {
        if (res.status == 200) {
          this.currentId = res.data.data[0].id;
          this.url = res.data.data[0].url;
          this.totalTime = res.data.data[0].time;
        }
      });
      api.hitSearchDetail(el.id).then((res) => {
        if (res.status == 200) {
          this.name = res.data.songs[0].al.name;
          this.coverImgUrl = res.data.songs[0].al.picUrl;
        }
      });

      api.lyricFn(el.id).then((res) => {
        if (res.status == 200) {
          let lyrics_temp = "" + res.data.lrc.lyric;
          this.lyrics = lyrics_temp.split("\n");
        }
      });
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
    details() {},
  },
});
</script>

<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
.custom_audoPlay {
  display: flex;
}
.ball {
  position: fixed;
  bottom: 5vh;
  left: 4vw;
  display: flex;
  height: fit-content;
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
  opacity: 0.7;
  height: 5vw;
  background-color: var(--boxColor);
  padding: 0.5vw 2vw 0.5vw 6vw;
  width: 35vw;
  height: fit-content;
  z-index: 8;
  border-radius: 1.5ch;
}
</style>
