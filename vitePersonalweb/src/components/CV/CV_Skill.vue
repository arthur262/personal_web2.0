<template>
  <div>
    <div class="abilitybox" id="Ability">
      <a-descriptions bordered title="Language I know So Far">

      <!-- DataBase -->
      <a-descriptions-item label="DataBase" style="font-weight: bold">
          <p
            class="w1"
            v-for="iteam in datas.DataBase"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>

        <!-- UI -->
        <a-descriptions-item label="UI" style="font-weight: bold">
          <p 
          class="w1" 
          v-for="iteam in datas.UI" 
          :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>
        
        <!-- Framework -->
        <a-descriptions-item label="Framework"  style="font-weight: bold">
          <p
            class="w1"
            v-for="iteam in datas.Framework"
            :key="iteam.id"
          >
            {{ iteam }}
          </p>
        </a-descriptions-item>

        <!-- Languages -->
        <a-descriptions-item label="Languages" >
          <p class="w1" v-for="iteam in datas.Front_language" :key="iteam.id">
            {{ iteam }}
          </p>
          <p class="w1" v-for="iteam in datas.Back_language" :key="iteam.id">
            {{ iteam }}
          </p>
          <br/>
        </a-descriptions-item>
      </a-descriptions>

    </div>
    <div v-if="false" class="detail">
      <ul v-for="iteam in datas.Techlist" :key="iteam.id">
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

<script >

export default {
  setup() { 
  },
  props:{datas:Object},
  data() {
    return {
    };
  },
  mounted: function () {
    
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
  background: whitesmoke;
}
.abilitybox h1, h2, h3, h4, h5, h6, p{
  margin: 0 ;
}
.detail {
  width: fit-content;
}
</style>
