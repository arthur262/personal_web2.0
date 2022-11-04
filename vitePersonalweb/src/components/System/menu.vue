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
        <li v-for="(item, index) in switchtext.link" :key="index">
          <router-link
            :to="'/' + item + '_' + this.Curent_lang"
            class="link text"
          >
            {{ this.switchtext.text[index] }}</router-link
          >
        </li>
        <li>
          <!-- right size tool -->
          <SystemTool />
        </li>
      </ul>
      
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
      switchtext: {
        link:[],
        text:[]
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

      //when the language is not english the link and text goes different
      this.switchtext.link= 
        page=="Student"?E_table.Student:
        page=="Programmer"?E_table.Programmer:
        page=="Photograph"?E_table.Programmer:
        page=="Contact"?E_table.Programmer:E_table.Student;




      if(language=="EN"){
        this.switchtext.text=
        page=="Student"?E_table.Student:
        page=="Programmer"?E_table.Programmer:
        page=="Photograph"?E_table.Programmer:
        page=="Contact"?E_table.Programmer:E_table.Student;

      }else if(language=="CN"){
        this.switchtext.text=
        page=="Student"?C_table.Student:
        page=="Programmer"?C_table.Programmer:
        page=="Photograph"?C_table.Programmer:
        page=="Contact"?C_table.Programmer:C_table.Student;

      }

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
