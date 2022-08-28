<template>
  <div>
    <div class="img-col">
      <a-card hoverable style="width: 240px"  v-for="(item, index) in list" :key="index">
    <template #cover>
      <img alt="example" :src="item.coverImgUrl" />
    </template>
    <a-card-meta title="Europe Street beat">
      <template #description>{{item.name}}</template>
    </a-card-meta>
  </a-card>
      </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import api from "/src/assets/api/music";
export default {
  setup() {
    return {};
  },
  data() {return{
    before:0,
    list:[],
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
            this.list=data.playlists;
            let fulldata=data.playlists;
            this.setupcurrent(fulldata[1]);
            this.before=fulldata[9].updateTime;
          }
        });
      
  },
   methods:{
    setupcurrent(el:any){
      // api.hotSearchListFn(el.id).then(res=>{
      //   console.log(res.data);
      // })
    },
  }
};
</script>

<style scoped>
.text {
  color: var(--boxColor);
}
.img-col {
 display:flex;
}
</style>