<template>
  
        <a-row type="flex">
          
          <div v-show="false">
            <waterfall
            :informational="pagekey"
            />
          </div>
         
          <a-col :flex="2">
            <a-menu v-model:selectedKeys="current" mode="horizontal" >
              <a-menu-item key="all" v-on:click="transfer('all')">
                {{AllLabels}}
              </a-menu-item>
              <a-menu-item key="Sky" v-on:click="transfer('Sky')">
                {{Sky}}
              </a-menu-item>
              <a-menu-item key="Landscape" v-on:click="transfer('Landscape')">
                {{Landscape}}
              </a-menu-item>
              <a-menu-item key="Travel" v-on:click="transfer('Travel')">
                {{Travel}}
              </a-menu-item>
            </a-menu>
          </a-col>
          <a-col :flex="4"> </a-col>
          <a-col :flex="2">
            <div
              style="
                float: right;
                height: 5ch;
                margin: auto 2ch auto;
                
              "
            >
              <a-input-search
              disabled
                v-model:value="value"
                placeholder="input search text"
                size="large"
                enter-button
                @search="onSearch"
                style="border-radius:1.5ch"
              />
            </div>
          </a-col>
        </a-row>
      
</template>

<script>
import waterfall from "./Photo_waterfall.vue";
import axios from "axios";
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/image/Photo_detail_EN.json";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: { waterfall },
  setup() {
    const current = ref(['all']);
    const value = ref("");
    const onSearch = (searchValue) => {
      console.log("use value", searchValue);
    };
    return {
      value,
      onSearch,
      current,
      
    };
  },
  data() {
    return {
      selected:"",
      AllLabels: "",
      Landscape: "",
      Sky: "",
      Travel: "",
      statement:"",
      pagekey: "",
    };
  },
  mounted: function () {
    this.getdata();
  },
  methods: {
    getdata() {
      axios
        .get(
          basicURL,
          {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
          },
          {
            emulateJSON: true,
            crossOriginIsolated: true,
          }
        )
        .then((response) => {
          this.AllLabels = response.data.AllLabels;
          this.Landscape = response.data.Landscape;
          this.Travel = response.data.Travel;
          this.statement = response.data.statement;
          this.Sky = response.data.Sky;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    transfer(el){
     this.pagekey=el;
    this.selected=el;
    }
  },
});
</script>

<style lang="less" scoped>

</style>