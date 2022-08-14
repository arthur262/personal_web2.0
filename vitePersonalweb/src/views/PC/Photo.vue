<template>
  <div style="width:100%;background-color:whitesmoke;min-height:100vh;">
    <a-layout class="Photo">
      <a-page-header style="border: 0px solid rgb(235, 237, 240); margin-left: 2%" title="Photo"
        @back="() => $router.back()" />
      <div>
      </div>
      <a-back-top />
    </a-layout>
  </div>
</template>

<script lang="ts">

export default ({
  components: {  },
  setup() {
    return {
    };
  },
  data() {
    return {
    };
  },
  mounted: function () {},
  methods: {},
});
</script>

<style scoped>
.Photo {
  max-width: 140ch;
  margin: 0 auto;
}
</style>
