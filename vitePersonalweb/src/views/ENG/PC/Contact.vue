<template>
    <div style="width: 100%; min-height: 100vh;" class="backgroundtheme">
        <section>
      <a-carousel autoplay :dots="dos" style="z-index: 1">
        <div v-for="iteam in DataBase" :key="iteam" class="background-image">
          <img
            :src="iteam"
            style="height: 100vh; width: 100vw; position: absolute"
          />
        </div>
      </a-carousel>

      <header style="position: absolute; width: 100%; height: 100vh; top: 0">
        <a-row type="flex" style="padding: 4vh 1vw 0 8vw">
          <a-col :flex="2">
            <router-link to="/Photograph_EN">
              <img src="http://arthur2.oss-cn-beijing.aliyuncs.com/Photopage/Artsy.png" style="opacity: 0.7" height="120" />
            </router-link>
          </a-col>
          <a-col :flex="2">
            <ul id="menu" ref="menu" class="animation-container">
              <li>
                <router-link to="/Home_EN" class="link"> Home</router-link>
              </li>
              <li>
                <router-link to="/Programmer_EN" class="link"
                  >Programmer
                </router-link>
              </li>
              <li>
                <router-link to="/Student_EN" class="link"> Student</router-link>
              </li>
            </ul>
            <!-- 右侧工具区 -->
            
          </a-col>
          <a-col :flex="2"><SystemTool style="margin-top:10px"/></a-col>
          
         
        </a-row>
        <div class="themeword">
          <h2
            style="
              font-family: 'Times New Roman', Times, serif;
              letter-spacing: 0.333333em;
              font-size: 2.5em;
              white-space: nowrap;
              font-style: italic;
              margin: 0;
            "
            class="animation-container text"
            ref="travel"
          >
            Travel
          </h2>
          <div style="margin: 0 auto; width: fit-content">
            <double-right-outlined
              :style="{ fontSize: '32px' }"
              class="roundloop"
            />
          </div>
        </div>
      </header>
    </section>
    </div>
  
</template>

<script lang="ts">
export default {

}
</script>

<style scoped>

</style>