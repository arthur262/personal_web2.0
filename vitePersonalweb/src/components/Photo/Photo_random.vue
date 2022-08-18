<template>
  <div>
    <section>
      <div style="min-height: 100vh; max-width: 180ch; margin: 0 auto">
        <div style="margin-bottom: 10vh">
          <a-row :gutter="[{ xs: 0, sm: 8, md: 24, lg: 32 }]">
            <a-col :span="14">
              <div
                class="example"
                v-motion
                :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                :visible="{ opacity: 1, y: 0, scale: 1 }"
                :delay="200"
              />
              <div style="height: 5vh" />
              <a-row>
                <a-col :span="8" />
                <a-col :span="14">
                  <div
                    class="example_h"
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
              <div
                class="example_h"
                v-motion
                :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                :visible="{ opacity: 1, y: 0, scale: 1 }"
                :delay="200"
              />
            </a-col>
          </a-row>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  setup() {},
  props: ["datas"],
  data() {
    return {
      ImgList: this.datas,
    };
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
  background: url(/Photo/A7M2_208.jpg) no-repeat;
  width: 100%;
  height: 40vh;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}
.example_h {
  background: url(/Photo/DSC00514-1.jpg) no-repeat;
  width: 100%;
  height: 60vh;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}
</style>
