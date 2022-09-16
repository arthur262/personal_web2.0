<template>
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

</template>

<script lang="ts">
export default {

}
</script>

<style scoped>
    #menu {
  list-style: none;
  display: flex;
  width: fit-content;
  float: right;
  z-index: 10;
}
.link {
  color: whitesmoke;
  font-size: 1.5rem;
  margin: 0 1vw;
  white-space: nowrap;
  font-family: Crimson Text;
  letter-spacing: 0.133333em;
}
#menu :hover a {
  color: rgba(245, 245, 245, 0.5);
  transition: 1s;
}
</style>