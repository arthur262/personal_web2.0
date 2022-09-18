<template>
  <div>
  <Nav/>
  </div>
</template>

<script lang="ts">
  import Nav from "/src/components/System/menu.vue";
import { ref } from "vue";
export default {
  setup() {

    return {
    };
  },
  components: { Nav },
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