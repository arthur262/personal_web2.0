<template>
  <div>
    <div style="width: 100%; min-height: 100vh" class="backgroundtheme">
      <Nav/>

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

      <div style="margin: 0 auto; display: flex; width:fit-content">
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
  </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Educationcontent from "/src/components/CV/CV_Edu_Back.vue";
import Skills from "/src/components/CV/CV_Skill.vue";
import Project from "/src/components/CV/CV_Project.vue";

import Nav from "/src/components/System/menu.vue";
import { useIntersectionObserver } from "@vueuse/core";
import {  ref } from "vue";


export default {
  components: { Nav,Skills, Educationcontent, Project },
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
}
.link:hover{
  color:rgba(127, 146, 99, 1);
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
