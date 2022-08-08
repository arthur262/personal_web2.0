<template>
  <div class="box" id="Project">
    <div style="display: flex">
      <!--<bars-outlined/>-->
      <h2 class="w2">{{ datas.Projects }}</h2>
    </div>
    <div class="card">
      <div
        v-for="(iteam, index) in datas.Project"
        :key="index"
        style="height: fit-content; width: 40ch; margin: 0 auto"
      >
        <a-card hoverable class="container" @click="move">
          <div style="margin: 0 auto; width: fit-content; margin-bottom: 2ch">
            <!--project image -->
            <img
              v-bind:src="iteam.pciture"
              height="180"
              width="180"
              size="10ch"
            />
          </div>
          <!-- card description -->
          <a-card-meta>
            <template #description>
              <h2 class="w2">{{ iteam.Title }}</h2>
              <p style="margin:0">
                <b>{{ iteam.TimeRanges }}</b>
              </p>
              <h4  style="margin:0">
                Github:
                <a v-bind:href="iteam.github"> {{ iteam.github }}</a>
              </h4>
              <div v-show="describe_OP">
                <ol
                  class="C_content"
                  v-for="iteamson in iteam.children"
                  :key="iteamson.id"
                >
                  <li>{{ iteamson.details }}</li>
                </ol>
              </div>
              <fullscreen-outlined class="icon" />
            </template>
          </a-card-meta>
        </a-card>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import { FullscreenOutlined } from "@ant-design/icons-vue";

export default {
  setup() {},
  props:['datas'],
  data() {
    return {
      describe_OP: false,
     
    };
  },
  mounted: function () {
  },
  methods: {
    move() {
      this.describe_OP = !this.describe_OP;
    },
  },
  components: {
    FullscreenOutlined,
  },
};
</script>

<style scoped>

.card {
  display: flex;
  width: 100%;
  margin: 0 auto;
  height: fit-content;
  border-radius: 1.5ch;
}
.card div {
  margin: 1ch;
}
.container {
  border-radius: 1.5ch;
  min-height: 55ch;
  height: max-content;
}

.icon {
  position: absolute;
  float: right;
  right: 2ch;
  bottom: 2ch;
  font-size: 24px;
}
</style>
