<template>
  <div>
    <a-layout style="scroll-behavior: smooth" class="backgroundtheme">
      <!-- 上半截 -->
      <header>
        <a-row type="flex">
          <a-col :flex="6">
            <a-menu v-model:selectedKeys="current" mode="horizontal" class="animation-container backgroundtheme">
              <a-menu-item>
                <router-link to="/Home" class="link text"> Home</router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to="/Programmer" class="link text"
                  >Programmer
                </router-link>
              </a-menu-item>
              <a-menu-item>
                <router-link to="/Student" class="link text">
                  Student</router-link
                >
              </a-menu-item>
            </a-menu>
          </a-col>
          <a-col :flex="2">
            <a-switch
              v-model:checked="mode"
              checked-children="Light"
              un-checked-children="Dark"
            />
          </a-col>
        </a-row>
      </header>

      <div style="margin: 0 auto; display: flex">
        <!-- 内容 -->
        <a-layout-content
          style="
            margin-top: 5vh;
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
          <Project :datas="DataBase" id="project" :mode="mode" />
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
.animation-container {
  list-style: none;
  display: flex;
  width: fit-content;
}

.link {
  font-size: 1.5rem;
  margin: 0 1vw;
  white-space: nowrap;
  font-family: Crimson Text;
  letter-spacing: 0.133333em;
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
</style>
