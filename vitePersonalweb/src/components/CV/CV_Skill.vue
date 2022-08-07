<template>
  <div>
    <!--  Ability Box    -->
    <div class="abilitybox" id="Ability">
      <h3 class="w2">{{ LanguageSkills }}</h3>
      <a-descriptions bordered>
        <a-descriptions-item label="Basic Languages" style="font-weight: bold">
          <p class="w1" v-for="iteam in this.Language" :key="iteam.id">
            {{ iteam }}
          </p>
        </a-descriptions-item>
        <a-descriptions-item
          label="Operation Systeam"
          style="font-weight: bold"
        >
          <p
            class="w1"
            v-for="iteam in Operation"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>
      </a-descriptions>
      <br />
      <a-descriptions bordered>
        <a-descriptions-item label="UI" style="font-weight: bold">
          <p 
          class="w1" 
          v-for="iteam in UI" 
          :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>
        <a-descriptions-item label="DataBase" style="font-weight: bold">
          <p
            class="w1"
            v-for="iteam in DataBase"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>

        <a-descriptions-item label="Framework"  style="font-weight: bold">
          <p
            class="w1"
            v-for="iteam in Framework"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>
        <br />
      </a-descriptions>
    </div>
    <div v-if="false" class="detail">
      <ul v-for="iteam in Techlist" :key="iteam.id">
        <h3>{{ iteam.title }}</h3>
        <ul>
          <li v-for="iteamson in iteam.children" :key="iteamson.id">
            {{ iteamson.description }}
          </li>
        </ul>
      </ul>
    </div>
    <!--  Project Box    -->
  </div>
</template>

<script>
import axios from "axios";
const basicURL =
  "http://arthur1.oss-us-west-1.aliyuncs.com/self-web/CV/CV_EN.json";

export default {
  setup() { 

  },
  data() {
    return {
      LanguageSkills: "",
      Language: [],
      DataBase: [],
      Framework: [],
      UI: [],
      Operation: [],
      Techlist: [],
    };
  },
  mounted: function () {
    this.getdata();
  },
  methods: {
    move() {
      this.describe_OP = true;
    },
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
          this.LanguageSkills = response.data.LanguageSkills;
          this.Language = response.data.Language;
          this.Framework = response.data.Framework;
          this.DataBase = response.data.DataBase;
          this.UI = response.data.UI;
          this.Operation = response.data.Operation;
          this.Techlist = response.data.Techlist;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  components: {
    //barsoutlined,
  },
};
</script>

<style lang="less" scoped>
.card {
  margin: 2ch;
  width: inherit;
}
.C_content {
  width: fit-content;
}

.abilitybox {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 4ch;
  width: inherit;
  border-radius: 1.5ch;
  margin: 4ch auto 4ch;
  background: whitesmoke;
}
.detail {
  width: fit-content;
}
</style>
