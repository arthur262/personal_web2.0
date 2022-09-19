<script setup lang="ts">
const formState = reactive({
  username: "",
  introduction: "",
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<template>
  <div class="container">
    <h2 style="font-size: 20px">Meet Me</h2>
    <a-form
      :model="formState"
      name="basic"
      layout="vertical"
      :label-col="{ span: 50 }"
      :wrapper-col="{ span: 50 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      style="max-width: 30vw; width: fit-content; margin: 0 auto"
    >
      <a-form-item
        label="email"
        name="YOUR EMAIL"
        style="width: 20vw"
        :rules="[{ required: true, message: 'Please input your Email!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>
      <a-form-item
        name="introduction"
        label="ADDTIONAL DETAILS"
        style="width: 20vw"
      >
        <a-textarea v-model:value="formState.introduction" />
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { reactive } from "vue";
interface FormState {
}
export default {};
</script>

<style
scoped>
.container {
  padding:1vh ;
  height: fit-content;
  width: fit-content;
  margin: 0 auto;
}
</style>