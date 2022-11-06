
<template>
  <a-affix :offset-top="0">
    <header class="menu_background">
      <a-row type="flex" class="container">
        <!-- website icon -->
        <a-col :flex="2">
          <router-link to="/Photograph_EN">
            <img
              src="http://arthur2.oss-cn-beijing.aliyuncs.com/Photopage/Artsy.png"
              style="opacity: 0.7"
              height="80"
            />
          </router-link>
        </a-col>

        <a-col :flex="2">
          <ul id="menu" ref="menu" class="animation-container">

            <li v-for="(item, index) in switchtext.link" :key="index">
              <router-link
                :to="'/' + item + '_' + this.Curent_lang"
                class="link text"
              >
                {{ this.switchtext.text[index] }}</router-link
              >
            </li>
<!-- right size tool -->
            <li>
              
              <div>
                <!-- color mode switch -->
                <a-switch
                  v-model:checked="mode"
                  checked-children="Light"
                  un-checked-children="Dark"
                />
                <!-- languages switch -->
                <a-dropdown>
                  <setting-filled class="set_icon" />
                  <template #overlay>
                    <a-menu class="backgroundtheme">
                      <a-menu-item>
                        <div
                          style="
                            display: flex;
                            align-items: center;
                            height: 100%;
                          "
                        >
                          <router-link :to="this.path + '_CN'" class="text"
                            >中文</router-link
                          >
                        </div>
                      </a-menu-item>
                      <a-menu-item>
                        <div
                          style="
                            display: flex;
                            align-items: center;
                            height: 100%;
                          "
                        >
                          <router-link :to="this.path + '_EN'" class="text"
                            >English</router-link
                          >
                        </div>
                      </a-menu-item>
                    </a-menu>
                  </template>
                </a-dropdown>
              </div>
            </li>
          </ul>
        </a-col>
      </a-row>
    </header>
  </a-affix>
</template>

<script lang="ts">
import { ref } from "vue";
import { language_selector } from "/src/assets/api/language_detech";
import { changeLight, changeDark } from "/src/assets/api/themechanger";
import { SettingFilled } from "@ant-design/icons-vue";
export default {
  components: { SettingFilled },
  data() {
    return {
      path: "",
      language: "",
      Curent_lang: "",
      switchtext: {
        link: [],
        text: [],
      },
    };
  },
  mounted() {
    language_selector();
    let path = this.$route.path.split("/");
    path = path[path.length - 1];
    path = path.split("_");
    this.path = path[0];
    this.language = path[1];
    this.Curent_lang = path[1];
    this.switchpage(path[0], path[1]);
  },
  setup() {
    const mode = ref<boolean>(
      JSON.parse(localStorage.theme) == "light" ? true : false
    );
    return {
      mode,
    };
  },
  methods: {
    //switch the menu
    switchpage(page: string, language: string) {
      let E_table = {
        Student: ["Home", "Programmer", "Photograph", "Contact"],
        Programmer: ["Home", "Student", "Photograph", "Contact"],
        Photograph: ["Home", "Programmer", "Student", "Contact"],
        Contact: ["Home", "Programmer", "Student", "Photograph"],
      };
      let C_table = {
        Student: ["主页", "未来头秃程序员", "摄影菜鸟", "联系我"],
        Programmer: ["主页", "学习渣渣", "摄影菜鸟", "联系我"],
        Photograph: ["主页", "未来头秃程序员", "学习渣渣", "联系"],
        Contact: ["主页", "未来头秃程序员", "学习渣渣", "摄影菜鸟"],
      };

      //when the language is not english the link and text goes different
      this.switchtext.link =
        page == "Student"
          ? E_table.Student
          : page == "Programmer"
          ? E_table.Programmer
          : page == "Photograph"
          ? E_table.Programmer
          : page == "Contact"
          ? E_table.Programmer
          : E_table.Student;

      if (language == "EN") {
        this.switchtext.text =
          page == "Student"
            ? E_table.Student
            : page == "Programmer"
            ? E_table.Programmer
            : page == "Photograph"
            ? E_table.Programmer
            : page == "Contact"
            ? E_table.Programmer
            : E_table.Student;
      } else if (language == "CN") {
        this.switchtext.text =
          page == "Student"
            ? C_table.Student
            : page == "Programmer"
            ? C_table.Programmer
            : page == "Photograph"
            ? C_table.Programmer
            : page == "Contact"
            ? C_table.Programmer
            : C_table.Student;
      }
    },
  },
  watch: {
    mode: function (newData, oldData) {
      if (newData) {
        changeLight();
      } else {
        changeDark();
      }
    },
  },
  created() {
    let theme = localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : "light";
    document.documentElement.setAttribute("theme", theme);
  },
};
</script>

<style scoped>
.set_icon {
  font-size: 24px;
  color: #08c;
  transform: translateY(20%) translateX(20%);
}
#menu {
  list-style: none;
  display: flex;
  width: fit-content;
  float: right;
  height: 100%;
  z-index: 10;
}
.link {
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0 0.3vw;
  white-space: nowrap;
  font-family: Microsoft YaHei, 黑体, 宋体, sans-serif;
  letter-spacing: 0.133333em;
}
.link:hover {
  color: rgba(25, 25, 25, 0.5);
  transition: color 0.3s;
}
.container {
  padding: 0 2vw;
}
li {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.animation-container {
  opacity: 0;
  animation: swing 0.5s linear;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes swing {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.menu_background {
  width: 100%;
  background: var(--box);
  backdrop-filter: blur(20px);
}
.line {
  line-height: 1.5em;
}
</style>
