<template>
  <a-row type="flex" class="container">
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
        <li>
          <router-link
            :to="'/' + this.Other_Webs.first + '_' + this.Curent_lang"
            class="link text"
          >
            {{ this.Other_Webs_text.first }}</router-link
          >
        </li>
        <li>
          <router-link
            :to="'/' + this.Other_Webs.second + '_' + this.Curent_lang"
            class="link text"
            >{{ this.Other_Webs_text.second }}
          </router-link>
        </li>
        <li>
          <router-link
            :to="'/' + this.Other_Webs.third + '_' + this.Curent_lang"
            class="link text"
          >
            {{ this.Other_Webs_text.third }}</router-link
          >
        </li>
        <li>
          <user-add-outlined />
          <router-link
            :to="'/' + this.Other_Webs.fourth + '_' + this.Curent_lang"
            class="link text"
          >
            {{ this.Other_Webs_text.fourth }}</router-link
          >
        </li>
        <li>
          <SystemTool />
        </li>
      </ul>
      <!-- 右侧工具区 -->
    </a-col>
  </a-row>
</template>

<script lang="ts">
import SystemTool from "/src/components/System/menu_tool.vue";
export default {
  components: { SystemTool },
  data() {
    return {
      Curent_lang:"",
      Other_Webs: {
        first: "",
        second: "",
        third: "",
        fourth: "",
      },
      Other_Webs_text: {
        first: "",
        second: "",
        third: "",
        fourth: "",
      },
    };
  },
  mounted() {
    let path = this.$route.path.split("/");
    path = path[path.length - 1];
    path = path.split("_");
    this.Curent_lang=path[1];
    this.switchpage(path[0], path[1]);
  },
  methods: {
    //switch the menu
    switchpage(page: string, language: string) {
      interface website_link {
        first: string;
        second: string;
        third: string;
        fourth: string;
      }
      interface website_text {
        first: string;
        second: string;
        third: string;
        fourth: string;
      }
      let link: website_link={first: "", second: "",third: "", fourth: ""};
      let text: website_text = { first: "", second: "", third: "", fourth: "" };

      let E_table = {
        Student: ["Home", "Programmer", "Photograph", "Contact"],
        Programmer:["Home","Student", "Photograph","Contact",],
        Photograph: ["Home", "Programmer", "Student", "Contact",],
        Contact:["Home","Programmer", "Student","Photograph",]
      }
      let C_table = {
        Student: ["主页", "未来头秃程序员", "摄影菜鸟", "联系我"],
        Programmer:["主页","学习渣渣", "摄影菜鸟","联系我",],
        Photograph: ["主页", "未来头秃程序员", "学习渣渣", "联系",],
        Contact:["主页","未来头秃程序员", "学习渣渣","摄影菜鸟",]
      }

      //only when the language is not english the link and text goes different
      if (page == "Student") {
        //link
        link.first = "Home";
        link.second = "Programmer";
        link.third = "Photograph";
        link.fourth = "Contact";
        //text
        if (language == "CN") {
          text.first = "主页";
          text.second = "未来头秃程序员";
          text.third = "野生摄影菜鸟";
          text.fourth = "联系";
        } else if (language == "EN") {
          text.first = "Home";
          text.second = "Programmer";
          text.third = "Photograph";
          text.fourth = "Contact";
        }
      } else if (page == "Photograph") {
        //link
        link.first = "Home";
        link.second = "Programmer";
        link.third = "Student";
        link.fourth = "Contact";
        //text
        if (language == "CN") {
          text.first = "主页";
          text.second = "未来头秃程序员";
          text.third = "学习渣渣";
          text.fourth = "联系";
        } else if (language == "EN") {
          text.first = "Home";
          text.second = "Programmer";
          text.third = "Student";
          text.fourth = "Contact";
        }
      } else if (page == "Contact") {
        //link
        link.first = "Home";
        link.second = "Programmer";
        link.third = "Student";
        link.fourth = "Photograph";
        //text
        if (language == "CN") {
          text.first = "主页";
          text.second = "未来头秃程序员";
          text.third = "学习渣渣";
          text.fourth = "野生摄影菜鸟";
        } else if (language == "EN") {
          text.first = "Home";
          text.second = "Programmer";
          text.third = "Student";
          text.fourth = "Photograph";
        }
      } else if (page == "Programmer") {
        //link
        link.first = "Home";
        link.second = "Student";
        link.third = "Photograph";
        link.fourth = "Contact";

        //text
        if (language == "CN") {
          text.first = "主页";
          text.second = "学习渣渣";
          text.third = "野生摄影菜鸟";
          text.fourth = "联系";
        } else if (language == "EN") {
          text.first = "Home";
          text.second = "Student";
          text.third = "Photograph";
          text.fourth = "Contact";
        }
      }

      this.Other_Webs.first = link.first;
      this.Other_Webs.second = link.second;
      this.Other_Webs.third = link.third;
      this.Other_Webs.fourth = link.fourth;

      this.Other_Webs_text.first = text.first;
      this.Other_Webs_text.second = text.second;
      this.Other_Webs_text.third = text.third;
      this.Other_Webs_text.fourth = text.fourth;
    },
  },
};
</script>

<style scoped>
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
  font-family: Microsoft YaHei,黑体,宋体,sans-serif;
  letter-spacing: 0.133333em;
}
.link:hover{
  color: rgba(25, 25, 25, 0.5) ;
  transition:color .3s;
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
</style>
