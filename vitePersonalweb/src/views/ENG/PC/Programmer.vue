<template>
  <div style="width: 100%; min-height: 100vh" class="backgroundtheme">
  <Nav/>
  </div>
</template>

<script lang="ts">
  import Nav from "/src/components/System/menu.vue";
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