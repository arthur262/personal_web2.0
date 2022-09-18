<template>
  <div>
    <div class="container">
      <ul>
        <li>
          <phone-outlined
            :style="{ fontSize: '32px' }"
            class="text"
            style="margin-right: 1vw"
          />

          <h4 class="text">+17788635990</h4>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yuanzhe-zhang-522940226/">
            <linkedin-outlined
              :style="{ fontSize: '32px' }"
              class="text"
              style="margin-right: 1vw"
            />
          </a>
        </li>
        <li>
          <wechat-outlined
            :style="{ fontSize: '32px' }"
            class="text"
            style="margin-right: 1vw"
          />
          <h4 class="text">arthur262_</h4>
        </li>
        <li>
          <a href="https://github.com/arthur262">
            <github-outlined
              :style="{ fontSize: '32px' }"
              class="text"
              style="margin-right: 1vw"
            />
            <h4 class="text">
            https://github.com/arthur262
            </h4>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {
  GithubOutlined,
  LinkedinOutlined,
  WechatOutlined,
  PhoneOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    GithubOutlined,
    LinkedinOutlined,
    PhoneOutlined,
    WechatOutlined,
  },
};
</script>

<style scoped>
.container {
  height: 30vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  margin: 5px 0px;
  display: list-item;
  text-align: -webkit-match-parent;
}
h4 {
  display: inline-block;
  width: calc(100%-32px);
  font-size: 20px;
}
ul {
}
</style>