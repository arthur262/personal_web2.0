<script lang="ts" setup></script>

<template>
  <div class="container">
  <kinesis-container>
  <kinesis-element :strength="8">
    <div class="plasticback">
      <a-row type="flex" justify="center" :gutter={xs:0,sm:6,md:6,lg:32} style="width:fit-content;">
        <!-- 左侧菜单 -->
        <a-col  :xs="{ order: 2 }" :sm="{ order: 2 }" :md="{ order: 2 }" :lg="{ order: 1 }" style="display: flex; justify-content: center; align-items: center">
          <div class="Wordcontainer">
            <ul class="menu">
            
            
              <li>
                <router-link to="/" class="link middle" @mouseenter="mouseover(0)" @mouseleave="mouseLeave()">Programmer
                </router-link>
              </li>
              
              <li>
                <router-link to="/" class="link middle" @mouseenter="mouseover(1)" @mouseleave="mouseLeave()">Stock
                  trader
                </router-link>
              </li>
              
              <li>
                <router-link to="/" class="link middle" @mouseenter="mouseover(2)" @mouseleave="mouseLeave()">
                  Student</router-link>
              </li>
              <li>
                <router-link to="/Photograph" class="link middle" @mouseenter="mouseover(3)" @mouseleave="mouseLeave()">
                  Photographer</router-link>
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
                    <a href="https://www.linkedin.com/in/yuanzhe-zhang-522940226/">
                      <linkedin-outlined :style="{ fontSize: '32px' }" />
                      </a>
                    </a-col>
                    <a-col :flex="8">
                      <wechat-outlined :style="{ fontSize: '32px' }" />
                    </a-col>
                  </a-row>
                </div>
               
          </div>
        </a-col>
        <!-- 右侧图片区 -->
        <kinesis-element :strength="12">
        <a-col  :xs="{ order: 1 }" :sm="{ order: 1 }" :md="{ order: 1 }" :lg="{ order: 2 }">
          <div class="selfshoots">
          <img width="400" src="http://arthur2.oss-cn-beijing.aliyuncs.com/5.1.jpg"  style="border-radius:1.5ch"/>
          </div>
        </a-col>
        </kinesis-element>
       
      </a-row>
    </div>
    </kinesis-element>
    </kinesis-container>
  </div>
</template>
<script lang="ts">
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
  },
  mounted(){
    if (this._isMobile()) {
      this.$router.replace('/Home_M');
    }
  },
  methods: {
    mouseover(index: number): void {
    },
    mouseLeave(): void { },
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag;
    }

  },
};
</script>

<style scoped>
.container {
  width: 100%;
background-image: url("http://arthur2.oss-cn-beijing.aliyuncs.com/DSC00368-HDR-2(1).jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: grid;
  align-items: center;
  justify-content: center;
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

/* control each text */
.menu :nth-child(1):hover a {
  color: #dca7a7;
  margin: 0 0.4vw 0 1.2vw;
  transition: 0.4s;
}

.menu :nth-child(2):hover a {
  color: rgba(127, 146, 99, 1);
  margin: 0 0.4vw 0 1.2vw;
  transition: 0.4s;
}

.menu :nth-child(3):hover a {
  color: #bab76d;
  margin: 0 0.4vw 0 1.2vw;
  transition: 0.4s;
}

.menu :nth-child(4):hover a {
  color: #8eb8de;
  margin: 0 0.4vw 0 1.2vw;
  transition: 0.4s;
}

.middle {
  margin: 0 0.8vw;
}
</style>
