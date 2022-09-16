<template>
  <div>
  <h1 class="text">Test</h1>
  <a-switch v-model:checked="mode" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {

    return {
    };
  },
  created() {

  },
  watch: {

  },

}
</script>

<style scoped>
.text {
  color: var(--boxColor);
}
</style>