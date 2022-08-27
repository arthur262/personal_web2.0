<template>
  <div>
        <a-layout style="scroll-behavior: smooth" class="backgroundtheme">
      <!-- 上半截 -->
      <a-affix :offset-top="0">
      <header class="menu_background">
      <div class="menu">
        <a-row type="flex">
          <a-col :flex="6">
            <ul class="animation-container">
              <li>
                <router-link to="/Home_CN" class="text link"> 主页</router-link>
              </li>
              <li>
                <router-link to="/Programmer_CN" class="text link"
                  >未来头秃程序员
                </router-link>
              </li>
              <li>
                <router-link to="/Photograph_CN" class="text link">
                  野生摄影菜鸟</router-link
                >
              </li>
            </ul>
          </a-col>
          <!-- menu右侧工具区 -->
          <a-col :flex="2" >
          <SystemTool/>
          </a-col>
        </a-row>
        </div>
      </header>
      </a-affix>
       <!-- affix -->
       <a-affix :offset-top="100">
        <a-anchor
          :showInkInFixed="true"
          style="position: absolute;
    right: 20px;"
        >
          <a-anchor-link href="#main" title="Education" />
          <a-anchor-link href="#skill" title="Skills" />
          <a-anchor-link href="#project" title="Project" />
        </a-anchor>
        </a-affix>

      <div style="margin: 0 auto; display: flex">
        <!-- 内容 -->
        <a-layout-content
          style="
            margin-top: 1vh;
            display: relative;
            max-width: 100ch;
            min-height: 100vh;
          "
        >
          <section class="describe_box box" id="main">
            <Educationcontent :datas="DataBase" />
          </section>

          <section style="margin-top: 5vh" ref="target">
            <Transition name="fademount">
              <Skills :datas="DataBase" v-show="targetIsVisible" id="skill" />
            </Transition>
          </section>
        </a-layout-content>
       
      </div>
      <!-- Project -->
      <Transition name="fademount">
        <div v-bind:style="background" ref="backtarget">
          <Project :datas="DataBase" id="project"  />
        </div>
      </Transition>
    </a-layout>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Educationcontent from "/src/components/CV/CV_Edu_Back.vue";
import Skills from "/src/components/CV/CV_Skill.vue";
import Project from "/src/components/CV/CV_Project.vue";
import SystemTool from "/src/components/System/menu_tool.vue";
import { useIntersectionObserver } from "@vueuse/core";
import {  ref } from "vue";

export default {
  components: { SystemTool,Skills, Educationcontent, Project },
  setup() {
    const target = ref(null);
    const targetIsVisible = ref(false);
    var viewheight =
      document.documentElement.clientHeight || document.body.clientHeight;

    useIntersectionObserver(
      target,
      ([{ isIntersecting }], observerElement) => {
        targetIsVisible.value = isIntersecting;
      },
      { threshold: 0.1 }
    );


    return {
      target,
      targetIsVisible,
      viewheight,
    };
  },

  data() {
    return {
      background: {
        backgroundColor: "rgba(36,36,36,1)",
      },
      DataBase: {},
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
    
  },

  methods: {
    watchbackground(element, el2: number): void {
      if (this.backtargetIsVisible) {
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
        .get("/data/CV_CN.json")
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
.menu_background{
  width: 100%;
    background:var(--box);
    backdrop-filter: blur(20px);
}
.menu {
  width: 80%;
  margin: 0 auto;
  line-height: 5em;
  justify-content: center;
}
.animation-container {
  list-style: none;
  display: flex;
  align-self: center;
  margin: 0 !important;
}

.link {
  font-size: 1.5rem;
  margin: 0 1vw;
  font-weight: 900;
  white-space: nowrap;
  font-family: Crimson Text;
  letter-spacing: 0.133333em;
  -webkit-text-stroke:1px var(--boxColor);
}
.link:hover {
  color: rgba(245, 245, 245, 0.5);
  transition: color 1s;
}

.fademount-enter-active {
  animation: upswing 0.5s linear;
}
.fademount-leave-active {
  animation: upswing 0.5s reverse;
}

@keyframes upswing {
  0% {
    transform: translateY(5%);
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
  animation: upswing 0.5s linear;
}
</style>
