<template>
  <div >
  <div v-if="this.language=='EN'" style="display: flex">
    <h3 class="text">
      Theme:
      <a-switch
        v-model:checked="mode"
        checked-children="Light"
        un-checked-children="Dark"
      />
    </h3>
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent style="margin-left: 10px">
        language selection
      </a>
      <template #overlay>
        <a-menu class="backgroundtheme">
          <a-menu-item>
            <router-link :to="this.path+'CN'" class="text">中文</router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link :to="this.path+'EN'" class="text">English</router-link>
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
      <a class="ant-dropdown-link" @click.prevent style="margin-left: 10px">
      选择语言
      </a>
      <template #overlay>
        <a-menu class="backgroundtheme">
          <a-menu-item>
            <router-link :to="this.path+'CN'" class="text">中文</router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link :to="this.path+'EN'" class="text">English</router-link>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { changeLight, changeDark } from "/src/assets/api/themechanger";
export default {
  setup() {
    const mode = ref<boolean>(
      JSON.parse(localStorage.getItem("theme")) == "light" ? true : false
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
    this.path=this.$route.path;
    let temp = this.path.substr(0, this.path.length - 2);
    this.language=this.path.substr( this.path.length - 2,this.path.length);
    this.path=temp;
  },
  created() {
    let theme = localStorage.getItem("theme")
      ? JSON.parse(localStorage.getItem("theme"))
      : "light";
    document.documentElement.setAttribute("theme", theme);
  },
};
</script>

<style></style>
