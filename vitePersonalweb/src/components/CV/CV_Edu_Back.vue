<template>
  <!--  Bckground education-->
  <div >
    <h1 class="Label" ><b>Education BackGround</b></h1>
    <span v-for="iteam in datas.Education" :key="iteam.Bachelor">
    <h3  >
      <b>{{ iteam.Bachelor }}</b>
    </h3>
    <div style="height: 4ch; font-size: 1em">
      <h3 style="float: left" >{{ iteam.School }}</h3>
      <h3 style="float: right" >{{ iteam.School_Date }}</h3>
    </div>
    <ul>
      <li v-if="iteam.CGPA>0" >GPA: {{ iteam.CGPA }}</li>
      <li >{{ iteam.Education_content }}</li>
    </ul>
    <a-divider />
    </span>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  setup() {},
  props:['datas','mode'],
};
</script>

<style  scoped>
.Label {
  font-family: "MILanPro_MEDIUM--GB1-4";
  font-size: 1.7em;
  margin: 20px 0!important;
}
.h1, h2, h3, h4, h5, h6, p{
  margin: 0 ;
}

</style>