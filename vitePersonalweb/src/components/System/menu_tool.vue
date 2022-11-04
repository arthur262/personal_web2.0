<template>
  <div >
  <div v-if="this.language=='EN'" style="display: flex;align-items: center; width:fit-content;" >

    <h3 class="text " style="margin:0;">
      Theme:
      <a-switch
        v-model:checked="mode"
        checked-children="Light"
        un-checked-children="Dark"
      />
    </h3>
    <!-- language_selector -->
    <a-dropdown>
      <a class="ant-dropdown-link text " @click.prevent style="margin-left: 10px;">
        language selection
      </a>
      <template #overlay>
        <a-menu class="backgroundtheme">
          <a-menu-item >
            <div style="display: flex;align-items: center;height:100%">
            <router-link :to="this.path+'_CN'" class="text " >中文</router-link>
            </div>
          </a-menu-item>
          <a-menu-item >
            <div style="display: flex;align-items: center;height:100%">
            <router-link :to="this.path+'_EN'" class="text " >English</router-link>
            </div>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    </div>
    
    <div v-else style="display: flex">
    <h3 class="text">
      主题:
      <a-switch
        v-model:checked="mode"
        checked-children="亮"
        un-checked-children="暗"
      />
    </h3>
    <a-dropdown>
      <a class="ant-dropdown-link text" @click.prevent style="margin-left: 10px">
      选择语言
      </a>
      <template #overlay>
        <a-menu class="backgroundtheme">
          <a-menu-item>
            <router-link :to="this.path+'_CN'" class="text">中文</router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link :to="this.path+'_EN'" class="text">English</router-link>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import {language_selector} from "/src/assets/api/language_detech";
import { changeLight, changeDark } from "/src/assets/api/themechanger";
export default {
  setup() {
    const mode = ref<boolean>(
      JSON.parse(localStorage.theme) == "light" ? true : false
    );
    return {
      mode,
    };
  },
  data() {
    return {
      path: "",
      language:"",
    };
  },
  method() {
  },
  watch: {
    mode: function (newData, oldData) {
      if (newData) {
        changeLight();
      } else {
        changeDark();
      }
    },
  },
  mounted() {
    language_selector();
    let path=this.$route.path.split("/");
    path=path[path.length-1];
    path=path.split("_");
    this.path = path[0];
    this.language= path[1];
    
  },
  created() {
    let theme = localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : "light";
    document.documentElement.setAttribute("theme", theme);
  },
};
</script>

<style scoped>
  .line{
    line-height:1.5em;
  }
</style>
