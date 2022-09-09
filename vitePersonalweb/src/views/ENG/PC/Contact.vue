
<template>
  <div style="width: 100%; min-height: 100vh" class="backgroundtheme">
    <!-- menu -->
    <section>
      <a-row type="flex" style="padding: 1.5vh 0 0 8vw">
        <a-col :flex="2">
          <router-link to="/Contact_EN">
            <img
              src="http://arthur2.oss-cn-beijing.aliyuncs.com/Photopage/Artsy.png"
              style="opacity: 0.7"
              height="80"
            />
          </router-link>
        </a-col>
        <a-col :flex="2">
          <ul id="menu" class="animation-container">
            <li>
              <router-link to="/Home_EN" class="link text"> Home</router-link>
            </li>
            <li>
              <router-link to="/Programmer_EN" class="link text"
                >Programmer
              </router-link>
            </li>
            <li>
              <router-link to="/Student_EN" class="link text">
                Student</router-link
              >
            </li>
          </ul>
          <!-- 右侧工具区 -->
        </a-col>
        <a-col :flex="2"><SystemTool style="margin-top: 10px" /></a-col>
      </a-row>
    </section>
    <!-- 给自己发邮件 -->
    <section>
      <a-row type="flex" style="max-width: 80%; margin: 0 auto; height: 80%">
        <a-col :flex="2">
        
          <Map/>
          
        </a-col>
        <a-col :flex="3">

        <Contact/>

        </a-col>
      </a-row>
    </section>
  </div>
</template>

<script lang="ts">
import SystemTool from "/src/components/System/menu_tool.vue";
import Map from "/src/components/Contact/map.vue";
import Contact from "/src/components/Contact/Email_form.vue";





export default {
  components: {
    SystemTool,
    Contact,
    Map,
  },
};
</script>

<style scoped>

#menu {
  list-style: none;
  display: flex;
  width: fit-content;
  float: right;
  z-index: 10;
}
.animation-container {
  opacity: 0;
  animation: swing 0.5s linear;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes swing {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
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
