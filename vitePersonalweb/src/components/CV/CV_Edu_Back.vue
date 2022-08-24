<template>
  <!--  Bckground education-->

  <div>
    <a-row type="flex">
      <a-col :flex="8">
        <div class="ID"></div>
      </a-col>
      <a-col :flex="16">
        <span style="padding: 3vh 2vw; text-align: center">
          <h1 style="font-size: 1.5em" class="text"><b>YuanZheZhang(Arthur)</b></h1>
          <h3 class="text">Phone: CN-{{ datas.phone_CN }}</h3>
          <h3 class="text">
            Email :<a
              href="mailto:arthur262@outlook.com"
              title="Send me the Email"
              >{{ datas.email }}</a
            >
          </h3>
          <h3 class="text">
            GitHub:
            <a href="https://github.com/arthur262" title="Github link">{{
              datas.github
            }}</a>
          </h3>
        </span>
      </a-col>
    </a-row>
    <br />
    <h1 class="Label text"><b>Education BackGround</b></h1>
    <span v-for="iteam in datas.Education" :key="iteam.Bachelor">
      <h3 class="text">
        <b>{{ iteam.Bachelor }}</b>
      </h3>
      <div style="height: 4ch; font-size: 1em">
        <h3 style="float: left" class="text">{{ iteam.School }}</h3>
        <h3 style="float: right" class="text">{{ iteam.School_Date }}</h3>
      </div>
      <ul>
        <li v-if="iteam.CGPA > 0" class="text">GPA: {{ iteam.CGPA }}</li>
        <li class="text">{{ iteam.Education_content }}</li>
      </ul>
      <a-divider style="border-top:1px solid var(--divider)"/>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  setup() {},
  props: ["datas"],
};
</script>

<style scoped>
.Label {
  font-family: "MILanPro_MEDIUM--GB1-4";
  font-size: 1.7em;
  margin: 20px 0 !important;
}
.text h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
.ID {
  height: 24ch;
  width: 24ch;
  background-image: url("http://arthur2.oss-cn-beijing.aliyuncs.com/Student/Personal.jpg");
  background-size: 24ch;
  margin: auto 3ch auto;
}
</style>
