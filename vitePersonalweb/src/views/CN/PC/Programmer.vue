<template>
  <div>
    <h1 class="text">{{url}}</h1>
    <h2>{{before}}</h2>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import api from "/src/assets/api/music.ts";
export default {
  setup() {
    return {};
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
    api.playlist_trayFn(this.before) .then(res => {
          const data = res.data
          if (data.code === 200) {
            let fulldata=data.playlists;
            this.setupcurrent(fulldata[1]);
            this.before=fulldata[9].updateTime;
          }
        });
      
  },
   methods:{
    setupcurrent(el:any){
      api.hotSearchListFn(el.id).then(res=>{
        console.log(res.data);
      })
    },
  }
};
</script>

<style scoped>
.text {
  color: var(--boxColor);
}
</style>