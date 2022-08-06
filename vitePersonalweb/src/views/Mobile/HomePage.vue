<script lang="ts" setup></script>

<template>
  <div class="container">
    <div class="filterimage"></div>
    <div class="plasticback">
      <a-row type="flex" :gutter={xs:0,sm:6,md:24,lg:32}>
        <!-- 左侧菜单 -->
        手机端
        <a-col :flex="12" :xs="{ order: 2 }" :sm="{ order: 2 }" :md="{ order: 1 }" style="display: flex; justify-content: center; align-items: center">
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
              <li>
              <!-- 图标区 -->
                <div class="mediacontact">
                  <a-row justify="center" :gutter="32">
                    <a-col :flex="8">
                      <github-outlined :style="{ fontSize: '32px' }" />
                    </a-col>
                    <a-col :flex="8">
                      <linkedin-outlined :style="{ fontSize: '32px' }" />
                    </a-col>
                    <a-col :flex="8">
                      <wechat-outlined :style="{ fontSize: '32px' }" />
                    </a-col>
                  </a-row>
                </div>
              </li>
            </ul>

          </div>
        </a-col>
        <!-- 右侧图片区 -->
        <a-col :flex="12" :xs="{ order: 1 }" :sm="{ order: 1 }" :md="{ order: 2 }">
          <div class="selfshoots">
          <img width="550" src="http://arthur2.oss-cn-beijing.aliyuncs.com/YuanZheZhang#5.1#(1).jpg" />
          </div>
        </a-col>
      </a-row>
    </div>
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
  methods: {
    mouseover(index: number): void {
    },
    mouseLeave(): void { },
  },
};
</script>

<style scoped>
.container {
  width: 100%;

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

.filterimage {
  position: absolute;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  background-image: url("http://arthur2.oss-cn-beijing.aliyuncs.com/DSC00368-HDR-2(1).jpg");
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(0.5px);
}

.plasticback {
  background-color: rgba(245, 245, 245, 0.1);
  padding: 3ch;
  backdrop-filter: blur(5px);
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
