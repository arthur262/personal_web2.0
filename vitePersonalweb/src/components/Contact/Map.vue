<template>
  <div>
    <div style="margin-bottom: 1vh">
      <img src="/public/Photo/_DSC4050.png" width="600" />
    </div>

    <div class="container shadow" style="margin-bottom: 5vh; display: flex">
      <ul>
        <li>
          <phone-outlined
            :style="{ fontSize: '32px' }"
            style="margin-right: 1vw"
          />

          <h4>+17788635990</h4>
        </li>
        <li>
          <linkedin-outlined
            :style="{ fontSize: '32px' }"
            style="margin-right: 1vw"
          />
        </li>
        <li>
          <wechat-outlined
            :style="{ fontSize: '32px' }"
            style="margin-right: 1vw"
          />
          <h4>arthur262_</h4>
        </li>
        <li>
          <github-outlined
            :style="{ fontSize: '32px' }"
            style="margin-right: 1vw"
          />
        </li>
      </ul>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11355.74372800062!2d-63.58631179999999!3d44.63922639999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a233ad7c879ad%3A0x92b432e3b6fd828f!2sThe%20Vuze!5e0!3m2!1szh-CN!2sca!4v1662750134612!5m2!1szh-CN!2sca"
        width="500"
        height="400"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
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
  border-radius: 1.5ch;
  padding: 2ch 0 2ch 2ch;
  height: fit-content;
  background-color: whitesmoke;
  width: fit-content;
  padding: 3ch;
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
  padding-left: 2vw;
}
</style>