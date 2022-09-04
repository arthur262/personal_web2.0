<template>
  <div>
    <section>
      <!-- 标语 -->
      <div style="min-height: 100vh; max-width: 160ch; margin: 0 auto">
        <a-row>
          <a-col span="22">
            <span style="width: fit-content">
              <h1
              class="text"
                style="
                  font-family: 'Times New Roman', Times, serif;
                  letter-spacing: 0.133333em;
                  font-size: 3.5em;
                  white-space: nowrap;
                  font-style: italic;
                  margin-bottom: 5vh;
                "
                
              >
                Faithfully restore the world in My eyes
              </h1>
              <h1
              class="text"
                style="
                  font-family: 'Times New Roman', Times, serif;
                  letter-spacing: 0.133333em;
                  font-size: 2.5em;
                  white-space: nowrap;
                  font-style: normal;
                  margin-bottom: 5vh;
                "
                
              >
                忠实的还原我所听，看，感
              </h1>
            </span>
          </a-col>
          <a-col span="2">
            <span>
              <svg
                t="1661109342266"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="1536"
                width="128"
                height="128"
              >
                <path
                  d="M925.6 443h-41.4c-19 0-39-14.8-44.7-32.9l-23.8-57.7c-8.9-16.7-5.3-41.3 8.1-54.7l29.3-29.3c13.4-13.4 13.4-35.4 0-48.8l-48.8-48.7c-13.4-13.4-35.3-13.4-48.7 0l-29.3 29.3c-13.4 13.4-38.1 17.1-54.8 8.1l-57.6-23.7c-18.1-5.6-33-25.7-33-44.7V98.5c0-18.9-15.5-34.5-34.5-34.5h-68.9c-19 0-34.5 15.5-34.5 34.5v41.4c0 18.9-14.8 39.1-32.9 44.7l-57.7 23.7c-16.7 9-41.3 5.4-54.7-8.1l-29.4-29.3c-13.4-13.4-35.3-13.4-48.7 0l-48.7 48.7c-13.5 13.4-13.5 35.3 0 48.7l29.3 29.3c13.4 13.4 17.1 38.1 8.1 54.7l-23.7 57.8c-5.7 18.1-25.7 32.9-44.7 32.9H98.5c-19 0-34.5 15.5-34.5 34.5v68.9c0 19 15.5 34.5 34.5 34.5h41.4c19 0.1 39 14.9 44.6 33l23.8 57.7c8.9 16.7 5.3 41.4-8.1 54.8l-29.4 29.3c-13.4 13.4-13.4 35.3 0 48.8l48.8 48.7c13.4 13.4 35.3 13.4 48.7 0l29.3-29.3c13.3-13.4 38-17 54.7-8l57.8 23.8c18.1 5.6 32.9 25.7 32.9 44.6v41.3c0 18.9 15.5 34.5 34.5 34.5h68.9c18.9 0 34.5-15.5 34.5-34.5v-41.3c0-19 14.9-39 33-44.6l57.7-23.8c16.7-9 41.3-5.4 54.8 8l29.2 29.3c13.4 13.4 35.4 13.4 48.7 0l48.8-48.7c13.4-13.5 13.4-35.4 0-48.8l-29.3-29.3c-13.4-13.4-17-38.1-8.1-54.8l23.8-57.7c5.6-18.1 25.8-32.9 44.7-32.9h41.4c18.9 0 34.4-15.5 34.4-34.5v-69c0-18.9-15.5-34.5-34.4-34.5z m-241.2 68.9c0 95.2-77.1 172.3-172.3 172.3-95.2 0-172.3-77.1-172.3-172.3 0-95.2 77.1-172.3 172.3-172.3 95.2 0 172.3 77.2 172.3 172.3z"
                  p-id="1537"
                ></path>
              </svg>
            </span>
          </a-col>
        </a-row>

        <div>
          <div v-for="(item, index) in ImgList" :key="index">
            <a-row
              :gutter="[{ xs: 0, sm: 8, md: 24, lg: 32 }]"
              v-if="index % 2 == 0"
              style="margin-bottom: 10vh"
            >
             <a-col :span="14">
                <div
                  v-motion
                  :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                  :visible="{ opacity: 1, y: 0, scale: 1 }"
                  :delay="200"
                >
                  <a-image
                    v-if="item.first !== ''"
                    :src="item.first"
                    :width="600"
                  />
                </div>
                <div style="height: 5vh" />
                <a-row>
                  <a-col :span="4" />
                  <a-col :span="20">
                    <div
                      v-motion
                      :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                      :visible="{ opacity: 1, y: 0, scale: 1 }"
                      :delay="200"
                    >
                      <a-image
                        v-if="item.second !== ''"
                        :src="item.second"
                        :width="600"
                      />
                    </div>
                  </a-col>
                  <a-col :span="2" />
                </a-row>
              </a-col>
              <a-col :span="10">
                <div style="height: 15vh" />
                <div
                  v-motion
                  :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                  :visible="{ opacity: 1, y: 0, scale: 1 }"
                  :delay="200"
                >

                      <a-image
                        v-if="item.third !== ''"
                        :src="item.third"
                        :width="600"
                      />
                      </div>
              </a-col>
            </a-row>
            <a-row
              :gutter="[{ xs: 0, sm: 8, md: 24, lg: 32 }]"
              v-if="index % 2 == 1"
              style="margin-bottom: 10vh"
            >
              <a-col :span="10">
                <div style="height: 15vh" />
                <div
                  v-motion
                  :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                  :visible="{ opacity: 1, y: 0, scale: 1 }"
                  :delay="200"
                >
                  <a-image
                    v-if="item.first !== ''"
                    :src="item.first"
                    :width="400"
                  />
                </div>
              </a-col>
              <a-col :span="14">
                <div
                  v-motion
                  :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                  :visible="{ opacity: 1, y: 0, scale: 1 }"
                  :delay="200"
                >
                  <a-image
                    v-if="item.second !== ''"
                    :src="item.second"
                    :width="600"
                  />
                </div>
                <div style="height: 5vh" />
                <a-row>
                  <a-col :span="6" />
                  <a-col :span="16">
                    <div
                      v-motion
                      :initial="{ opacity: 0, y: 30, scale: 0.7 }"
                      :visible="{ opacity: 1, y: 0, scale: 1 }"
                      :delay="200"
                    >
                      <a-image
                        v-if="item.third !== ''"
                        :src="item.third"
                        :width="600"
                      />
                    </div>
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
      showup: 0,
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
.icon {
  animation: rot 10s linear infinite;
}
@keyframes rot {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
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
