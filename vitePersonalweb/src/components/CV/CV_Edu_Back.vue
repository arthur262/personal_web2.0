<template>
  <!--  Bckground education-->

  <div>
    <h1 class="w2 Label"><b>Education BackGround</b></h1>
    <h3 class="w1">
      <b>{{ Bacher }}</b>
    </h3>
    <div style="height: 4ch; font-size: 1em">
      <h3 style="float: left">{{ School }}</h3>
      <h3 style="float: right">{{ School_Date }}</h3>
    </div>
    <ul>
      <li>{{ CGPA }}</li>
      <li>{{ Education_content }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/CV/CV_EN.json";
export default {
  components: {},
  setup() {},

  data() {
    return {
      Bacher: "",
      School: "",
      School_Date: "",
      CGPA: "",
      Education_content: "",
    };
  },
  mounted: function () {
    this.getdata();
  },
  methods: {
    getdata() {
      axios
        .get(
          basicURL,
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          },
          {
            emulateJSON: true,
            crossOriginIsolated: true,
          }
        )
        .then((response) => {
          this.Bacher = response.data.Bacher;
          this.School = response.data.School;
          this.School_Date = response.data.School_Date;
          this.CGPA = response.data.CGPA;
          this.Education_content = response.data.Education_content;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style  scoped>
.Label {
  font-family: "MILanPro_MEDIUM--GB1-4";
  font-size: 1.7em;
}
</style>