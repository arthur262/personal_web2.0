<script setup lang="ts">
const formState = reactive({
  username: "",
  password: "",
  introduction: "",
  remember: true,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<template>
  <div style="width: 100%; min-height: 100vh" class="backgroundtheme">
    <section>
      <a-row type="flex" style="padding: 1.5vh 0 0 8vw">
        <a-col :flex="2">
          <router-link to="/Contact_EN">
            <img
              src="http://arthur2.oss-cn-beijing.aliyuncs.com/Photopage/Artsy.png"
              style="opacity: 0.7"
              height="80"
            />
          </router-link>
        </a-col>
        <a-col :flex="2">
          <ul id="menu" class="animation-container">
            <li>
              <router-link to="/Home_EN" class="link text"> Home</router-link>
            </li>
            <li>
              <router-link to="/Programmer_EN" class="link text"
                >Programmer
              </router-link>
            </li>
            <li>
              <router-link to="/Student_EN" class="link text">
                Student</router-link
              >
            </li>
          </ul>
          <!-- 右侧工具区 -->
        </a-col>
        <a-col :flex="2"><SystemTool style="margin-top: 10px" /></a-col>
      </a-row>
    </section>
    <div style="height: 2vh; width: 100%" />
    <section>
      <a-row type="flex" style="max-width: 80%; margin: 0 auto">
        <a-col :flex="2">
          <div class="box container shadow">
            <!-- 给自己发邮件 -->
            <a-form
              :model="formState"
              name="basic"
              
              layout="vertical"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 15 }"
              autocomplete="off"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
              style="max-width:40vw; margin: 0 auto;"
            >
              <a-form-item
                label="First Name"
                name="NAME"
                :rules="[
                  { required: true, message: 'Please input your First Name!' },
                ]"
              >
                <a-input v-model:value="formState.username"  />
              </a-form-item>
              <a-form-item
                label="email"
                name="YOUR EMAIL"
                :rules="[
                  { required: true, message: 'Please input your Email!' },
                ]"
              >
                <a-input v-model:value="formState.username" />
              </a-form-item>

              <a-form-item
                label="Subject"
                name="MESSAGES"
                :rules="[
                  { required: true, message: 'Please input your MESSAGES!' },
                ]"
              >
                <a-input v-model:value="formState.password" />
              </a-form-item>

              <a-form-item
                name="introduction"
                label="ADDTIONAL DETAILS"
              >
                <a-textarea v-model:value="formState.introduction" />
              </a-form-item>

              <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                <a-button type="primary" html-type="submit">Submit</a-button>
              </a-form-item>
            </a-form>
          </div>
        </a-col>
        <a-col :flex="3"> </a-col>
      </a-row>
    </section>
  </div>
</template>

<script lang="ts">
import SystemTool from "/src/components/System/menu_tool.vue";
import { reactive } from "vue";

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
export default {
  components: { SystemTool },
};
</script>

<style scoped>
.container {
  border-radius: 1.5ch;
  padding: 2ch 0 2ch 2ch;
  height: fit-content;
}
#menu {
  list-style: none;
  display: flex;
  width: fit-content;
  float: right;
  z-index: 10;
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
.link {
  color: whitesmoke;
  font-size: 1.5rem;
  margin: 0 1vw;
  white-space: nowrap;
  font-family: Crimson Text;
  letter-spacing: 0.133333em;
}
#menu :hover a {
  color: rgba(245, 245, 245, 0.5);
  transition: 1s;
}
</style>
