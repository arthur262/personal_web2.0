<template>
  <div>
    <section>
      <div style="min-height: 100vh; max-width: 160ch; margin: 0 auto">
        <div >
        <div v-for=" (item, index)  in ImgList" :key="index" >
          <a-row :gutter="[{ xs: 0, sm: 8, md: 24, lg: 32 }]" v-if="index%2==0" style="margin-bottom: 10vh">
            <a-col :span="14">
              <a-image
              v-if="item.first!==''"
              :src="item.first"
              :width="600"
                
                v-motion
                :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                :visible="{ opacity: 1, y: 0, scale: 1 }"
                :delay="200"
              />
              <div style="height: 5vh" />
              <a-row>
                <a-col :span="8" />
                <a-col :span="14">
                  <a-image
                  v-if="item.second!==''"
                  :src="item.second"
                  :width="600"
                    
                    v-motion
                    :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                    :visible="{ opacity: 1, y: 0, scale: 1 }"
                    :delay="200"
                  />
                </a-col>
                <a-col :span="2" />
              </a-row>
            </a-col>
            <a-col :span="10">
              <div style="height: 15vh" />
              <a-image
              v-if="item.third!==''"
              :src="item.third"
                :width="600"
                v-motion
                :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                :visible="{ opacity: 1, y: 0, scale: 1 }"
                :delay="200"
              />
            </a-col>
          </a-row>
          <a-row :gutter="[{ xs: 0, sm: 8, md: 24, lg: 32 }]" v-if="index%2==1" style="margin-bottom: 10vh">
           
            <a-col :span="10">
              <div style="height: 15vh" />
              <a-image
              v-if="item.first!==''"
              :src="item.first"
              :width="600"
                
                v-motion
                :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                :visible="{ opacity: 1, y: 0, scale: 1 }"
                :delay="200"
              />
            </a-col>
             <a-col :span="14">
              <a-image
              v-if="item.second!==''"
              :src="item.second"
              :width="600"
                
                v-motion
                :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                :visible="{ opacity: 1, y: 0, scale: 1 }"
                :delay="200"
              />
              <div style="height: 5vh" />
              <a-row>
                <a-col :span="8" />
                <a-col :span="14">
                  <a-image
                  v-if="item.third!==''"
                  :src="item.third"
                    :width="600"
                    v-motion
                    :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                    :visible="{ opacity: 1, y: 0, scale: 1 }"
                    :delay="200"
                  />
                </a-col>
                <a-col :span="2" />
              </a-row>
            </a-col>
          </a-row>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  setup() {},
  props: {
    datas: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ImgList: [],
      showup:0,
    };
  },
  methods: {
    ishorizontal(url) {
      var img = new Image();
      img.src = url;
      if (img.complete) {
        if (img.width > img.height) {
          return true;
        } else return false;
      } else {
        console.log("image error");
      }
    },
  },
  computed: {},
  watch: {
    datas(newVal, oldVal) {
      var images: String[] = Object.values(JSON.parse(JSON.stringify(newVal)));

      for (var i = Math.ceil(images.length / 3); i > 0; i--) {
        var temp: any;
        var structure = { first: "", second: "", third: "" };

         temp = images.shift();
        if (temp != null) {
          structure.first = temp;
        }
        temp = images.shift();
        if (temp != null) {
          structure.second = temp;
        }
        temp = images.shift();
        if (temp != null) {
          structure.third = temp;
        }
        this.ImgList.push(structure);
      }
    },
  },

  mounted: function () {},
};
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transition: 0.3s all ease-out;
  transform: scale(0.8);
}
.example {
  width: 100%;
  height: 40vh;
  object-fit: none; 
  object-position: center;
}
.example_h {
  width: 100%;
  height: 60vh;
  object-fit: none; 
  object-position: center;
}
</style>
