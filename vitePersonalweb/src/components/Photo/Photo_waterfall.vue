<template>
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

export default {
  props: {
    informational:{
      type: String,
      default: ""  
      },
  },
  setup() {
    return {
    };
  },
  data() {
    return {
      waterfallData: "",
    };
  },
  mounted: function () {
    this.getdata();
  },
  created() {},
  methods: {
    getdata() {
      axios
        .get("/data/Photo_Src.json")
        .then((response) => {
          this.waterfallData = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>
<style  scoped>
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
