<template>
  <div class="Photo">
    <a-layout>
      <a-page-header
        style="border: 0px solid rgb(235, 237, 240); margin-left: 2%"
        title="Photo"
        @back="() => $router.back()"
      />
      <!-- switch-->
      <a-layout-content class="head">
        <a-row type="flex">
          <a-col :flex="2">
            <a-menu :selectedKeys='[curent]' mode="horizontal">
              <a-menu-item key="all" v-on:click="transfer('all')">
                {{ AllLabels }}
              </a-menu-item>
              <a-menu-item key="Sky" v-on:click="transfer('Sky')">
                {{ Sky }}
              </a-menu-item>
              <a-menu-item key="Landscape" v-on:click="transfer('Landscape')">
                {{ Landscape }}
              </a-menu-item>
              <a-menu-item key="Travel" v-on:click="transfer('Travel')">
                {{ Travel }}
              </a-menu-item>
            </a-menu>
          </a-col>
          <a-col :flex="4"> </a-col>
          <a-col :flex="2">
            <div style="float: right; height: 5ch; margin: auto 2ch auto">
              <a-input-search
                disabled
                v-model:value="value"
                placeholder="input search text"
                size="large"
                enter-button
                @search="onSearch"
                style="border-radius: 1.5ch"
              />
            </div>
          </a-col>
        </a-row>
      </a-layout-content>
      <!-- water fall-->
      <div>
        <div class="waterfall px-container clearfix" v-cloak>
          <a-image-preview-group>
            <div
              class="px-waterfall left"
              v-for="(el, i) in newWaterfallData"
              :key="i"
            >
            
              <a-card
                hoverable
                style="padding:2px"
                v-for="(item, index) in el"
                :key="index"
                class="card_div"
              >
              <a-spin :spinning="spinning" :delay=unload(index)>
                
                  <a-image
                    :src="item.u_img"
                    alt="example"
                    loading="lazy"
                    style="border-radius: 1ch"
                  />
              </a-spin>
              </a-card>
              
            </div>
          </a-image-preview-group>
        </div>
        
      </div>
      <!-- water fall-->
      <a-back-top />
    </a-layout>
  </div>
</template>

<script>
const spinning = ref(true);
import axios from "axios";
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/Photo_detail_EN.json";
const basicURL1 =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/Photo_Src.json";
  
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {},
  setup() {
    
    const value = ref("");
    const onSearch = (searchValue) => {
      console.log("use value", searchValue);
    };
    return {
      value,
      onSearch,
      spinning,
    };
  },
  data() {
    
    return {
      curent: 'all',
    
      AllLabels: "",
      Landscape: "",
      Sky: "",
      Travel: "",


      //用来储存图片链接
      Travel_L:"",
      Landscape_L:"",
      Sky_L:"",

      waterfallData: "",
      newWaterfallData: "",
    };
  },
  mounted: function () {
    this.getdata();
    this.getdata1();
    
  },
  methods: {
    getdata() {
      axios
        .get(
          basicURL,
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          },
          {
            emulateJSON: true,
            crossOriginIsolated: true,
          }
        )
        .then((response) => {
          this.AllLabels = response.data.AllLabels;
          this.Landscape = response.data.Landscape;
          this.Travel = response.data.Travel;
          this.Sky = response.data.Sky;
          
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getdata1() {
      axios
        .get(
          basicURL1,
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          },
          {
            emulateJSON: true,
            crossOriginIsolated: true,
          }
        )
        .then((response) => {
          /* 用于获取waterfall数据的*/
          this.Travel_L=response.data.Traveller,
          this.Landscape_L=response.data.Landscape,
          this.Sky_L=response.data.Sky,

          this.waterfallData = this.condition(
            this.Travel_L,this.Landscape_L,this.Sky_L
          );
          this.fresh();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    transfer(el) {
      this.curent = el;
      this.waterfallData = this.condition(
            this.Travel_L,this.Landscape_L,this.Sky_L
          );
      this.fresh();
      this.spinning=true;
      
    },
     fresh() {
      let [...waterfallData] = this.waterfallData;
      let [...newWaterfallData] = [[], [], []];
      waterfallData.sort(function () {
        return Math.random() > 0.5 ? -1 : 1;
      });

      waterfallData.forEach((el, i) => {
        //如果第一行不能进入
        switch (i % 3) {
          case 0:
            newWaterfallData[0].push(el);
            break;
          case 1:
            newWaterfallData[1].push(el);
            break;
          case 2:
            newWaterfallData[2].push(el);
            break;
        }
      });
      this.newWaterfallData = newWaterfallData;
    },
    /* 用于切换数组*/
    condition(el1, el2, el3) {
      
      if (this.curent == "all") {
        return el1.slice(0,8).concat(el2.slice(0,8).concat(el3.slice(0,8)));
      }
      else if(this.curent == "Sky")
      {
        return el3;
      }
      else if(this.curent == "Landscape")
      {
        return el2;
      }
      else if(this.curent == "Travel")
      {
        return el1;
      }
    },
    unload(index){
      setTimeout(() =>{
      this.spinning=false;
    },(1000+index*300))
    }
  },
});
</script>

<style lang="less" scoped>
.head {
  position: relative;
  max-width: 100%;
  width: 140vh;
  min-width: 60vh;
  margin: 5ch auto 0;
  padding: 2ch;
  height: fit-content;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 1.5ch;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0)
  );
  justify-content: center;
}
.px-container {
  width: fit-content;
  max-width: 1200px;
  margin: 0 auto;
}
.card_div {
  margin: 2ch auto 2ch;
  border-radius: 1.5ch;
  padding: 2ch;
}
.left {
  float: left;
  width: fit-content;
}
[v-cloak] {
  display: none !important;
}
.waterfall {
  margin-top: 2ch;
  margin-bottom: 2ch;
}
.px-waterfall {
  width: calc(300px);
  &:nth-child(3n + 2) {
    margin: 1ch 4ch 10ch;
  }
  img.bg-img {
    border-radius: 8px;
  }
}
.switchbar {
  margin: 0 auto;
  width: fit-content;
}
</style>
