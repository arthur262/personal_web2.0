<template>
  <div class="container"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomePage",
  data() {
    return {
      url: "",
    };
  },
});
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: fit-content;
  background-image: url("http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/%E5%9B%BE%E7%89%87.png");
  background-size: 100% 100%;
}
</style>
