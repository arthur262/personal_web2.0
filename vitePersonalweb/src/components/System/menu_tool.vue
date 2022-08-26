<template>
  <div style="display: flex">
  {{path}}
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
            <router-link to="/Student_CN" class="text">中文</router-link>
          </a-menu-item>
          <a-menu-item>
            <router-link to="/Student_EN" class="text">English</router-link>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
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
  data(){
    return{
        path:'',
    }
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
  mounted(){
        var temp:String=""+this.$route.path;
        this.path = temp.substr(0,this.path.length-2);
        console.log(this.path);
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
