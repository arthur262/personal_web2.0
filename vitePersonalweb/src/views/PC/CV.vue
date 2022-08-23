<template>
  <div>
    <a-layout style="scroll-behavior: smooth;" class="Content">
      <!-- content-->

      <div style="margin: 0 auto; display: flex">
        <a-layout-content  style="margin-top: 5vh;display: relative;
  max-width: 100ch;
  min-height: 100vh;">
  <a-row type="flex" >
  <a-col :flex="6">
          <ul id="menu" ref="menu" class="animation-container">
              <li>
                <router-link to="/Home" class="link "> Home</router-link>
              </li>
              <li>
                <router-link to="/Programmer" class="link "
                  >Programmer
                </router-link>
              </li>
              <li>
                <router-link to="/Student" class="link "> Student</router-link>
              </li>
            </ul>
            </a-col>
            <a-col :flex="2">
          <a-switch v-model:checked="mode" checked-children="Light" un-checked-children="Dark" />
          </a-col>
          </a-row>
          

          <section class="describe_box" id="main">
            <a-row type="flex">
              <a-col :flex="8">
                <div class="ID"></div>
              </a-col>
              <a-col :flex="16">
                <span style="padding: 3vh 2vw; text-align: center">
                  <h1 style="font-size: 1.5em" class=""><b>YuanZheZhang(Arthur)</b></h1>
                  <h3 class="" >Phone: CN-{{ DataBase.phone_CN }}</h3>
                  <h3 class="">
                    Email :<a
                      href="mailto:arthur262@outlook.com"
                      title="Send me the Email"
                      >{{ DataBase.email }}</a
                    >
                  </h3>
                  <h3 class="text">
                    GitHub:
                    <a
                      href="https://github.com/arthur262"
                      title="Github link"
                      >{{ DataBase.github }}</a
                    >
                  </h3>
                </span>
              </a-col>
            </a-row>
            <br />
            <Educationcontent :datas="DataBase" />
          </section>

          <section style="margin-top: 5vh" ref="target">
            <Transition name="fademount">
              <Skills :datas="DataBase" v-show="targetIsVisible" id="skill" />
            </Transition>
          </section>
        </a-layout-content>
        <!-- affix -->
        <a-anchor
          :target-offset="targetOffset"
          :showInkInFixed="true"
          style="margin: 15vh 0 0 1vw"
        >
          <a-anchor-link href="#main" title="Education" />
          <a-anchor-link href="#skill" title="Skills" />
          <a-anchor-link href="#project" title="Project" />
        </a-anchor>
      </div>
      <!-- Project -->
      <Transition name="fademount">
        <div v-bind:style="background" ref="backtarget">
            <Project :datas="DataBase" id="project" :mode="mode"/>
        </div>
      </Transition>
    </a-layout>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Educationcontent from "../../components/CV/CV_Edu_Back.vue";
import Skills from "../../components/CV/CV_Skill.vue";
import Project from "../../components/CV/CV_Project.vue";

import { useIntersectionObserver } from "@vueuse/core";
import { onMounted, ref } from "vue";
import { changeLight, changeDark } from "../../assets/api/themechanger";

export default {
  components: { Skills, Educationcontent, Project },
  setup() {
    const target = ref(null);
    const backtarget = ref(null);

    const backtargetIsVisible = ref(false);
    const targetIsVisible = ref(false);

    const mode = ref<boolean>(true);
    var viewheight =
      document.documentElement.clientHeight || document.body.clientHeight;

    useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        targetIsVisible.value = isIntersecting;
      },
      { threshold: 0.1 }
    );
    useIntersectionObserver(
      backtarget,
      ([{ isIntersecting }], observerElement) => {
        backtargetIsVisible.value = isIntersecting;
      },
      { threshold: 0.1 }
    );

    const targetOffset = ref<number | undefined>(undefined);
    onMounted(() => {
      targetOffset.value = window.innerHeight / 2;
    });

    return {
      mode,
      target,
      targetIsVisible,
      targetOffset,
      backtarget,
      backtargetIsVisible,
      viewheight,
    };
  },

  data() {
    return {
      background: {
        backgroundColor: "rgba(36,36,36,1)",
      },
      DataBase: {},
      mode:true,
    };
  },
  mounted: function () {
    this.getdata();
  },
  // 监听project元素是否进入视图
  watch: {
    viewheight: function (newData, oldData) {
      if (this.backtargetIsVisible == true) {
      }
    },
    mode: function (newData, oldData) {
      if (newData) {
        changeLight();
      } else {
        changeDark();
      }
    },
  },
  created() {
    //let theme = localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : 'light'
    let theme = "light";
    document.documentElement.setAttribute("theme", theme);
  },
  methods: {
    watchbackground(element, el2:number): void {
      if(this.backtargetIsVisible){
        console.log(element.offsetTop);
      }
    },
    getdata() {
      // axios
      //   .get(
      //     basicURL,
      //     {
      //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //     }
      //   )
      //   .then((response) => {
      //     this.DataBase = response.data;
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      axios
        .get("/data/CV_EN.json")
        .then((response) => {
          this.DataBase = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>


.fademount-enter-active {
  animation: upswing 0.5s linear;
}
.fademount-leave-active {
  animation: upswing 0.5s reverse;
}

@keyframes upswing {
  0% {
    transform: translateY(-5%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.describe_box {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 1.5ch;
  padding: 4ch;
}

.ID {
  height: 24ch;
  width: 24ch;
  background-image: url("http://arthur2.oss-cn-beijing.aliyuncs.com/Student/Personal.jpg");
  background-size: 24ch;
  margin: auto 3ch auto;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 60px;
  width: 60px;
  line-height: 60px;
  border-radius: 50%;
  background-color: rgba(127, 146, 99, 1);
  color: whitesmoke;
  text-align: center;
  font-size: 20px;
}
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
</style>
