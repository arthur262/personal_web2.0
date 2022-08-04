<template>
  <div>
    <a-button v-on:click="show()" style="margin: 0 auto">
      {{ informational }} 1111
    </a-button>
    <div class="waterfall px-container clearfix" v-cloak>
      <a-image-preview-group>
        <div
          class="px-waterfall left"
          v-for="(el, i) in newWaterfallData"
          :key="i"
        >
          <a-card
            hoverable
            style="width: "
            v-for="(item, index) in el"
            :key="index"
            class="card_div"
          >
            <template #cover >
              <a-image :src="item.u_img" alt="example" loading="lazy" style="border-radius:1ch ;"/>
            </template>
          </a-card>
        </div>
      </a-image-preview-group>
    </div>
    <div class="switchbar">
      <a-pagination v-model:current="current" :total="50" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ref } from "vue";
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/Photo_Src.json";
export default {
  props: {
    informational:{
      type: String,
      default: ""  
      },
  },
  setup() {
    return {
      current: ref(1),
    };
  },
  data() {
    return {
      selectedKeys: "Sky",
      waterfallData: "",
      newWaterfallData: "",
    };
  },
  mounted: function () {
    this.getdata();
  },
  created() {},
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
          this.waterfallData = this.condition(
            response.data.Traveller,
            response.data.Landscape,
            response.data.Sky
          );
          this.fresh();
        })
        .catch(function (error) {
          console.log(error);
        });
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
    isHorzeontal(element) {
      var img = new Image();
      img.src = element.u_img;
      img.onload = function () {
        return img.width > img.height ? true : false;
      };
    },
    show() {
      console.log(this.informational);
    },
    condition(el1, el2, el3) {
      if (this.selectedKeys == "all") {
        return el1.concat(el2.concat(el3.concat));
      }
      else if(this.selectedKeys == "Sky")
      {
        return el3
      }
      else if(this.selectedKeys == "Landscape")
      {
        return el2;
      }
      else if(this.selectedKeys == "Travel")
      {
        return el1;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.px-container {
  width: fit-content;
  max-width: 1200px;
  margin: 0 auto;
}
.card_div {
  margin: 2ch auto 2ch;
  border-radius: 1.5ch;
  padding: 1ch;
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
