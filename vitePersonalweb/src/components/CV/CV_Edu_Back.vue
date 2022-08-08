<template>
  <!--  Bckground education-->

  <div>
    <h1 class="w2 Label"><b>Education BackGround</b></h1>
    <h3 class="w1">
      <b>{{ datas.Bacher }}</b>
    </h3>
    <div style="height: 4ch; font-size: 1em">
      <h3 style="float: left">{{ datas.School }}</h3>
      <h3 style="float: right">{{ datas.School_Date }}</h3>
    </div>
    <ul>
      <li>GPA: {{ datas.CGPA }}</li>
      <li>{{ datas.Education_content }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  setup() {},
  props:['datas'],
};
</script>

<style  scoped>
.Label {
  font-family: "MILanPro_MEDIUM--GB1-4";
  font-size: 1.7em;
}
</style>