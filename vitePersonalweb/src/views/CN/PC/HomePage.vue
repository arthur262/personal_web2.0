<script lang="ts" setup></script>

<template>
  <div>
    <div class="container" :style="'background-image: url(' + dark_Img + ')'">
      <Systemtool class="tool-position" />
      <selfCard class="content" />
    </div>
  </div>
</template>
<script lang="ts">
import Systemtool from "/src/components/System/menu_tool.vue";
import axios from "axios";
import selfCard from "/src/components/Home/self-card.vue";

export default {
  components: {
    Systemtool,
    selfCard,
  },
  data() {
    return {
      light_Img: "",
      dark_Img: "",
      theme: "",
    };
  },
  mounted() {
    if (this._isMobile()) {
      this.$router.replace("/Home_M");
    }
    this.getdata();
  },
  methods: {
    getdata() {
      axios
        .get("/data/Photo_Src.json")
        .then((response) => {
          this.light_Img = response.data.Homebackground.light;
          this.dark_Img = response.data.Homebackground.dark;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
  },
};
</script>

<style scoped>
.content {
  height: fit-content;
  padding: 0 5vw;
  display: table-cell;
  vertical-align: middle;
}

.tool-position {
  position: absolute;
  top: 2vh;
  right: 2vw;
}
.container {
  width: 100%;
  background-image: url("/Photo/_DSC3555.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: table;
  min-height: 100vh;
  background-position: center;
  overflow: hidden;
}
</style>
