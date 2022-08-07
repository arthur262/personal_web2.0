<template>
  <div>
    <a-layout>
      <!-- content-->

      <div style="margin: 0 auto">
        <a-layout-content class="Content" style="margin-top: 10vh">
          <a-page-header
            style="border: 0px solid rgb(235, 237, 240)"
            title="Home"
            @back="() => $router.go(-1)"
          />
          <section class="describe_box" id="main">
            <a-row type="flex">
              <a-col :flex="8">
                <div class="ID"></div>
              </a-col>
              <a-col :flex="16">
                <span style="padding: 3vh 2vw; text-align: center">
                  <h1 style="font-size: 1.5em"><b>YuanZheZhang(Arthur)</b></h1>
                  <h3 class="w3">Phone: CN-{{ phone_CN }}</h3>
                  <h3 class="w3">
                    Email :<a
                      href="mailto:arthur262@outlook.com"
                      title="Send me the Email"
                      style="color: black"
                      >{{ email }}</a
                    >
                  </h3>
                  <h3 class="w3">
                    GitHub:
                    <a
                      href="https://github.com/arthur262"
                      title="Github link"
                      >{{ github }}</a
                    >
                  </h3>
                </span>
              </a-col>
            </a-row>
            <br />
            <Educationcontent />
          </section>

          <!-- <Skills />
        <Project />  -->
        </a-layout-content>
      </div>
      <!-- affix -->
      <a-anchor :target-offset="targetOffset">
        <a-anchor-link href="#main" title="Education" />
        <a-anchor-link title="Ability" />
        <a-anchor-link title="Project"> </a-anchor-link>
      </a-anchor>
    </a-layout>
  </div>
</template>

<script>
import axios from "axios";
import Educationcontent from "../../components/CV/CV_Edu_Back.vue";
import Skills from "../../components/CV/CV_Skill.vue";
import Project from "../../components/CV/CV_Project.vue";
import { CloudDownloadOutlined } from "@ant-design/icons-vue";

import { defineComponent, onMounted, ref } from "vue";

const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/CV/CV_EN.json";

export default defineComponent({
  components: { Skills, Educationcontent, Project, CloudDownloadOutlined },
  setup() {
    const targetOffset = ref(undefined);
    onMounted(() => {
      targetOffset.value = window.innerHeight / 2;
    });
    return {
      targetOffset,
    };
  },

  data() {
    return {
      phone_CN: "",
      phone_CA: "",
      email: "",
      github: "",
      Currentyear: "",
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
          this.phone_CN = response.data.phone_CN;
          this.phone_CA = response.data.phone_CA;
          this.email = response.data.email;
          this.github = response.data.github;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
</script>

<style scoped>
.Content {
  display: relative;
  max-width: 100ch;
  min-height: 100vh;
}

.describe_box {
  background: whitesmoke;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 1.5ch;
  padding: 4ch;
}

.ID {
  height: 24ch;
  width: 24ch;
  background-image: url("http://arthur1.oss-us-west-1.aliyuncs.com/self-web/CV/Personal.jpg");
  background-size: 24ch;
  margin: auto 3ch auto;
}
</style>
