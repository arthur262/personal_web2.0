<template>
  <div class="box" id="Project">
    <div style="display: flex">
      <!--<bars-outlined/>-->
      <h2 class="w2">{{ Projects }}</h2>
    </div>
    <div class="card">
      <div
        v-for="(iteam, index) in Project.slice(0, 2)"
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
    <div class="card">
      <div
        v-for="(iteam, index) in Project.slice(2, 4)"
        :key="index"
        style="height: max-content; width: 40ch; margin: 0 auto"
      >
        <a-card hoverable class="container" @click="move">
          <div style="margin: 0 auto; width: fit-content; margin-bottom: 2ch">
            <img
              v-bind:src="iteam.pciture"
              height="200"
              width="200"
              size="10ch"
            />
          </div>
          <a-card-meta>
            <template #description>
              <h2 class="w2">{{ iteam.Title }}</h2>
              <p>
                <b>{{ iteam.TimeRanges }}</b>
              </p>
              <h4>
                Github :
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

<script>
import axios from "axios";
import { FullscreenOutlined } from "@ant-design/icons-vue";
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/CV/CV_EN.json";

export default {
  setup() {},
  data() {
    return {
      describe_OP: false,
      Projects: "",
      Project: [],
    };
  },
  mounted: function () {
    this.getdata();
  },
  methods: {
    move() {
      this.describe_OP = !this.describe_OP;
    },

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
          this.Projects = response.data.Projects;
          this.Project = response.data.Project;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  components: {
    FullscreenOutlined,
  },
};
</script>

<style lang="less" scoped>
.box {
  width: inherit;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 4ch;
  border-radius: 1.5ch;
  margin: 3ch auto 3ch;
  background: whitesmoke;
}
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
