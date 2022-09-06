<script lang="ts" setup></script>

<template>
  <div>

    <div class="container" 
    :style="'background-image: url(' +dark_Img + ')'"
    >
      <Systemtool class="tool-position" />
      <div class="content">
      <div style="float:right">
      <kinesis-container>
        <kinesis-element :strength="8">
          <div class="plasticback">
            <kinesis-element :strength="12">
              <!-- 图片区 -->
              <div class="selfshoots">
                <img
                  width="400"
                  src="/Photo/2f15e8bf58afc597b49da57c086aee0.jpg"
                  style="border-radius: 1.5ch"
                />
              </div>
            </kinesis-element>
            <!-- 菜单 -->
            <kinesis-element :strength="8">
            <div class="Wordcontainer">
             <ul class="menu">
              <li>
                <router-link to="/Programmer_CN" class="link middle"
                  >未来头秃程序员
                </router-link>
              </li>
              <li>
                <router-link to="/Student_CN" class="link middle">
                  学习渣渣</router-link
                >
              </li>
              <li>
                <router-link to="/Photograph_CN" class="link middle">
                  野生摄影菜鸟</router-link
                >
              </li>
            </ul>
              <!-- 图标区 -->
              <div class="mediacontact">
                <a-row justify="center" :gutter="32">
                  <a-col :flex="8">
                    <a href="https://github.com/arthur262">
                      <github-outlined :style="{ fontSize: '32px' }" />
                    </a>
                  </a-col>
                  <a-col :flex="8">
                    <a
                      href="https://www.linkedin.com/in/yuanzhe-zhang-522940226/"
                    >
                      <linkedin-outlined :style="{ fontSize: '32px' }" />
                    </a>
                  </a-col>
                  <a-col :flex="8">
                    <wechat-outlined :style="{ fontSize: '32px' }" />
                  </a-col>
                </a-row>
              </div>
            </div>
            </kinesis-element>
          </div>
        </kinesis-element>
      </kinesis-container>
      </div>
    </div>
     
    </div>
    
  </div>
</template>
<script lang="ts">
import Systemtool from "/src/components/System/menu_tool.vue";
import axios from "axios";
import {
  GithubOutlined,
  LinkedinOutlined,
  WechatOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    GithubOutlined,
    LinkedinOutlined,
    WechatOutlined,
    Systemtool,
  },
  data(){
    return {
      light_Img:'',
      dark_Img:'',
      theme:'',
    }
  },
  mounted(){
    if (this._isMobile()) {
      this.$router.replace('/Home_M');
    }
    this.getdata();

  },
  methods: {
    getdata() {
      axios
        .get("/data/Photo_Src.json")
        .then((response) => {
          this.light_Img= response.data.Homebackground.light;
          this.dark_Img=response.data.Homebackground.dark;

        })
        .catch(function (error) {
          console.log(error);
        });
    },
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }

  },
};
</script>

<style scoped>
.content{
  height:fit-content;
  padding: 0 5vw ;
  display:table-cell; 
     vertical-align:middle;

}
.tool-position {
  position: absolute;
  top: 2vh;
  right: 2vw;
}
.container {
  width: 100%;
  background-image: url("/Photo/_DSC3555.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display:table;
  min-height: 100vh;
  background-position: center;
  overflow: hidden;
}

.mediacontact {
  padding: 1ch;
  border-radius: 2.5ch;
  width: fit-content;
  margin: 1.5vh auto;
  background-color: rgba(245, 245, 245, 0.5);
}

.plasticback {
  background-color: rgba(245, 245, 245, 0.1);
  padding: 3ch;
  backdrop-filter: blur(5px);
  width: fit-content;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 2.5ch;
}

.selfshoots {
  width: fit-content;
  animation-duration: 1s;
  animation-name: fadeIn;
  animation-delay: 0.3s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0.1;
  }

  100% {
    opacity: 1;
  }
}

.Wordcontainer {
  width: fit-content;
}

/*  set up text */
.link {
  color: rgba(245, 245, 245, 0.7);
  font-size: 3.5em;
  font-family: "Helvetica";
  font-weight: bold;
}

ul {
  list-style: none;
}

a {
  color: black;
}

/* control each text */
.menu :nth-child(1):hover a {
  color: #dca7a7;
  margin: 0 0.4vw 0 1.2vw;
  transition: 0.4s;
  text-decoration: underline;
}

.menu :nth-child(2):hover a {
  color: rgba(127, 146, 99, 1);
  margin: 0 0.4vw 0 1.2vw;
  transition: 0.4s;
  text-decoration: underline;
}

.menu :nth-child(3):hover a {
  color: #8eb8de;
  margin: 0 0.4vw 0 1.2vw;
  transition: 0.4s;
  text-decoration: underline;
}

/* control all text*/
.middle {
  margin: 0 0.8vw;
  text-transform: uppercase;
  font-family: "Executive-Medium";
}
</style>
