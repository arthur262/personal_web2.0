<script lang="ts" setup>
import { format, anlylyrics } from "/src/assets/api/common_api";
const value1 = ref<number>(0);
</script>
<template>
  <div>
    <div class="ball" @click="details()">
      <div
        class="coverImage"
        :style="'background-image: url(' + coverImgUrl + ')'"
        @mouseenter="setSortHover"
        @mouseleave="leaveSortHover"
      />
      <div class="avroRecord" />

      <div class="audio_detail" ref="DIYauio">
        <a-row type="flex">
          <!-- 显示歌的名字 -->
          <a-col :flex="2"
            ><p
              class="text"
              style="margin-bottom: 0; font-weight: bold; overflow: hidden"
            >
              {{ name }}:
            </p>
          </a-col>
          <!-- 展示歌词 -->
          <a-col :flex="10">
            <p
              class="text"
              style="
                margin-bottom: 0;
                text-align: center;
                overflow: hidden;
                width: inherit;
              "
            >
              {{ lyrics_line }}
            </p>
          </a-col>
        </a-row>
        <!-- 自定义播放器 -->
        <a-row type="flex" class="SetPlayerFacingAngle">
          <a-col :flex="2">
            <span v-if="play" @click="playaudio()">
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
            ><span v-else @click="playaudio()"
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
          <a-col :flex="2"
            ><p class="text">-{{ left_time }}</p></a-col
          >
          <span @click="swiAudioFrmList()">
            <svg
              t="1662057991555"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2369"
              width="28"
              height="28"
            >
              <path
                d="M810.666667 512a52.92 52.92 0 0 1-25.78 45.666667l-618.666667 373.28a53.333333 53.333333 0 0 1-80.886667-45.666667V138.72a53.333333 53.333333 0 0 1 80.886667-45.666667l618.666667 373.28A52.92 52.92 0 0 1 810.666667 512z m128 405.333333V106.666667a21.333333 21.333333 0 0 0-42.666667 0v810.666666a21.333333 21.333333 0 0 0 42.666667 0z"
                fill="#5C5C66"
                p-id="2370"
              ></path>
            </svg>
          </span>
        </a-row>
        <audio :muted="mute" :src="url" ref="audiosrc" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/*
 * https://www.jb51.net/article/195512.htm
 * 这是关于计时器的原帖,思路来源.
 */
import { defineComponent, ref } from "vue";
import api from "/src/assets/api/music.ts";
import axios from "axios";
import router from "../../router/index";

export default defineComponent({
  data() {
    return {
      //用于储存循环的歌单
      DataBase: "",
      //当前歌曲在歌单中的序列
      current_index: -1,
      //用于控制当前歌曲是否是播放的
      play: true,
      //所有歌词
      lyrics: [],
      user_control_percentage: false,

      //用来储存当前所放的歌曲的信息
      url: "",
      name: "",
      currentId: -1,
      //当前歌词的第几行
      lyrics_line: "",
      //解释当前歌曲播放到几秒了
      time: -1,
      left_time: 0,
      totalTime: 0,
      coverImgUrl: "",
      mute: true,
    };
  },
  created() {},
  watch: {
    value1(newValue, oldValue) {
      if (newValue != oldValue + 1) {
        this.updateTime(newValue);
      }
    },
  },
  mounted: function () {
    this.getdata();
    this.timer = setInterval(this.updateTime, 500);
    this.timer2 = setInterval(this.matchlyrics, 500);
    this.timer3 = setInterval(this.siwtchsongAlart, 500);
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
          this.lyrics = anlylyrics(lyrics_temp.split("\n"));
        }
      });
      //初始化音频的时间和音量和加载资源
      var audio = this.$refs.audiosrc;

      audio.load();
      this.time = 0;
      audio.volume = 0.5;
    },

    //每500ms 更新一次时间戳
    updateTime(el?: number) {
      var audio = this.$refs.audiosrc;
      if (!el) {
        let temp = audio.currentTime * 1000;
        this.time = temp;
        this.value1 = Math.floor((temp / this.totalTime) * 100);
        this.left_time = format(this.totalTime - temp);
      } else {
        this.time = ((el / 100) * this.totalTime) / 1000;
        audio.currentTime = this.time;
      }
    },
    //每500ms 更新一次歌词
    matchlyrics() {
      //如果用户当前正在挪动进度条就不更新
      if (!this.user_control_percentage) {
        for (var i = 0; i < this.lyrics.length; i++) {
          if (
            this.lyrics[i].time <= this.time &&
            this.lyrics[i + 1].time >= this.time
          ) {
            this.lyrics_line = this.lyrics[i].word;
            break;
          }
        }
      }
    },

    //处理开始播放和暂停
    playaudio() {
      var audio = this.$refs.audiosrc;
      if (audio.paused == true) {
        this.mute = false;
        audio.play();
      } else {
        audio.pause();
      }
      this.play = !this.play;
    },
    //检测是否需要更换歌单
    siwtchsongAlart() {
      if (Math.floor(this.time / 1000) >= Math.floor(this.totalTime / 1000)) {
        this.swiAudioFrmList();
      }
    },

    swiAudioFrmList() {
      //还没开始
      if (this.current_index < 0) {
        this.current_index = 0;
        this.setupcurrent(this.DataBase[this.current_index]);
      } else {
        let temp: number = this.current_index;
        this.current_index = (temp + 1) % this.DataBase.length;
        this.setupcurrent(this.DataBase[temp], true);
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

    //跳转到专业的页面
    details() {},

    setSortHover() {
      this.$refs.DIYauio.style.width = 30 + "vw";
      this.$refs.DIYauio.style.opacity = 0.7;
    },
    leaveSortHover(){
      setTimeout((()=>{
        this.$refs.DIYauio.style.width = 0 + "vw";
      
      }),2000)
      setTimeout((()=>{
        this.$refs.DIYauio.style.opacity = 0.7;
      
      }),3000)
      
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearInterval(this.timer2);
    clearInterval(this.timer3);
  },
});
</script>

<style scoped>
.code-box-demo .ant-slider {
  margin-bottom: 16px;
}
.SetPlayerFacingAngle {
  align-items: center;
}
.ball {
  position: fixed;
  bottom: 5vh;
  left: 4vw;
  display: flex;
  height: fit-content;
}

.coverImage {
  height: 6vw;
  width: 6vw;
  z-index: 10;

  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 2px;
  border: 1px solid var(--boxColor);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
}

.avroRecord {
  height: 6vw;
  width: 6vw;
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
  transform: translateX(20%);
  opacity: 0;
  height: 6vw;
  padding: 0.5vw 2vw 0.5vw 4vw;
  
  background-color: var(--boxColor);
  z-index: 8;
  border-radius: 1.5ch;
  transition: width 1s ease-in-out;
}
</style>
