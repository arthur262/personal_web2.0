<template>
  <div>

    <div v-for="(iteam, index) in datas.Project" :key="index" class="card">

<!-- card description -->
      <a-card hoverable class="container">
        
        <a-card-meta>
          <template #description>
            <h2 class="w2">{{ iteam.Title }}</h2>

            <p style="margin: 0">
              <b>{{ iteam.TimeRanges }}</b>
            </p>

            <h4 style="margin: 0;" >
            Technical used:
            </h4>

            <span >
            <p v-for="child in iteam.Technical" :key="child" style="display:inline;">{{child}},</p>
            </span>

            <h4 style="margin: 0">
              Github:
              <a v-bind:href="iteam.github"> {{ iteam.github }}</a>
            </h4>

            <ul v-for="child in iteam.children" :key="child.id">
              <li>{{ child }}</li>
            </ul>
          </template>
        </a-card-meta>
      </a-card>
<!-- deyail image -->
      <div>
      
        <span v-for="child in iteam.picture" :key="child.id">
          <img :src="child" height="400" >
        </span>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import Parallax from 'vue-parallaxy'
import { FullscreenOutlined } from "@ant-design/icons-vue";

export default {
  setup() { },
  props: ["datas"],
  data() {
    return {
      describe_OP: false,
    };
  },
  mounted: function () { },
  methods: {

  },
  components: {
    FullscreenOutlined,
  },
};
</script>

<style scoped>
.card {
  display: flex;
  padding:0;
  max-width: 140ch;
}

.card div {
  margin: 1ch;
}

.container {
  border-radius: 1.5ch;
  height: fit-content;
}
</style>
