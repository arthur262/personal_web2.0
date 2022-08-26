<template>
  <div>
  <span v-if="this.language == 'EN'">
    <div class="abilitybox box" id="Ability">
    <h3 class="text" style="margin-bottom:10px;">Language I know So Far</h3>
      <a-descriptions bordered  >
      <!-- DataBase -->
      <a-descriptions-item label="DataBase" style="font-weight: bold">
          <p
            class="text"
            v-for="iteam in datas.DataBase"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>

        <!-- UI -->
        <a-descriptions-item label="UI" style="font-weight: bold">
          <p 
          class="text" 
          v-for="iteam in datas.UI" 
          :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>
        
        <!-- Framework -->
        <a-descriptions-item label="Framework"  style="font-weight: bold">
          <p
            class="text"
            v-for="iteam in datas.Framework"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>

        <!-- Languages -->
        <a-descriptions-item label="Languages" >
          <p class="text" v-for="iteam in datas.Front_language" :key="iteam.id">
            {{ iteam }}
          </p>
          <p class="text" v-for="iteam in datas.Back_language" :key="iteam.id">
            {{ iteam }}
          </p>
          <br/>
        </a-descriptions-item>
      </a-descriptions>

    </div>
    </span>
    <span v-else-if="this.language == 'CN'">
    <div class="abilitybox box" id="Ability">
    <h3 class="text" style="margin-bottom:10px;font-weight:800;">机器语言</h3>
      <a-descriptions bordered  >
      <!-- DataBase -->
      <a-descriptions-item label="数据库" style="font-weight: bold">
          <p
            class="text"
            v-for="iteam in datas.DataBase"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>

        <!-- UI -->
        <a-descriptions-item label="UI框架" style="font-weight: bold">
          <p 
          class="text" 
          v-for="iteam in datas.UI" 
          :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>
        
        <!-- Framework -->
        <a-descriptions-item label="框架"  style="font-weight: bold">
          <p
            class="text"
            v-for="iteam in datas.Framework"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>

        <!-- Languages -->
        <a-descriptions-item label="前后端语言" >
          <p class="text" v-for="iteam in datas.Front_language" :key="iteam.id">
            {{ iteam }}
          </p>
          <p class="text" v-for="iteam in datas.Back_language" :key="iteam.id">
            {{ iteam }}
          </p>
          <br/>
        </a-descriptions-item>
      </a-descriptions>

    </div>
    </span>
   
  </div>
</template>

<script lang="ts">

export default {
  setup() { 
  },
  props:{datas:Object},
  data() {
    return {
      language:'',
    };
  },
  mounted: function () {
    this.language= localStorage.language;
  },
  components: {
    //barsoutlined,
  },
};
</script>

<style scoped>

.abilitybox {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 4ch;
  width: inherit;
  border-radius: 1.5ch;
  margin: 4ch auto 4ch;
}
.abilitybox h1, h2, h3, h4, h5, h6, p{
  margin: 0 ;
}
.detail {
  width: fit-content;
}
</style>
