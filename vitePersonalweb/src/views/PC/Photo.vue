<template>
  <div style="width: 100%; min-height: 100vh">
    <header class="backpic">
    
      <ul class="menu">
        
        <li>
          <router-link
            to="/Programmer"
            class="link middle"
            >Codder
          </router-link>
        </li>
        <li>
          <router-link
            to="/Home"
            class="link middle"

          >
            Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/Student"
            class="link middle"
          >
            Student</router-link
          >
        </li>
      </ul>
      <!-- <div /> -->
    </header>
    <section></section>
    <a-back-top />
  </div>
</template>

<script lang="ts">
export default {
  components: {},
  setup() {
    return {};
  },
  data() {
    return {};
  },
  mounted: function () {},
  methods: {},
};
</script>

<style scoped>
.menu {
  list-style: none;
  display: flex;
  width: fit-content;
  margin: 0 auto;
  padding: 1vh 0 0 0;
  z-index: 10;
}

.link {
  
  color: transparent;
  
-webkit-text-stroke:2px rgba(245, 245, 245, 0.7);
  font-size: 2.5em;
  font-family: "Helvetica";
  font-weight:bolder;  
}
.menu :hover a {
  color: #8eb8de;
  -webkit-text-stroke:0 rgba(245, 245, 245, 0.7);
  
}

.middle {
  margin: 0 1vw;
  text-transform: uppercase;
  font-family: "Executive-Medium";
}
.backpic{
  background-image: url("/Photo/A7M2 (208).jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width:100vw;
  height: 100vh;
  z-index: 1;
}
</style>
