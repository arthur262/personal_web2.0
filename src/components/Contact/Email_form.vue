<script setup lang="ts">
const formState = reactive({
  introduction: "",
  subject:""
});
const subject = [
      { label: 'Job', value: 'Contact with collbrate purpose' },
  { label: 'Improve suggestion', value: 'There is a bug in website or somthing you can prove' },
      { label: 'Other', value: 'Contact with other purpose' },
    ];
const onFinish = () => {
  window.open(
        'mailto:arthur262@outlook.com?subject='+formState.subject+'&body='+formState.introduction
      );
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<template>
  <div class="container">
    <h2 style="font-size: 20px">Contact Me</h2>
    <a-form
      :model="formState"
      name="basic"
      layout="vertical"
      :label-col="{ span: 50 }"
      :wrapper-col="{ span: 50 }"
      autocomplete="on"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
      style="max-width: 30vw; width: fit-content; margin: 0 auto"
    >
    <a-form-item name="subject" label="Subject" :rules="[{ required: true, message: 'Please select a Subject' }]">
      <a-select v-model:value="formState.subject" :options="subject" />
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
export default {
  methods:{ 
    
  }
};
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