
<template>
  <div style="width: 100%; min-height: 100vh" class="backgroundtheme">
    <!-- menu -->
    <section class="backimg">
      <Nav/>
    </section>

    <section>
      <a-row type="flex">
        <a-col :flex="2">
          <information/>
        </a-col>
        <a-col :flex="2">
          <Map />
        </a-col>
        <a-col :flex="2">
          <Contact />
        </a-col>
      </a-row>
    </section>
  </div>
</template>

<script lang="ts">

import information from "/src/components/Contact/Information.vue";
import Map from "/src/components/Contact/map.vue";
import Contact from "/src/components/Contact/Email_form.vue";
import Nav from "/src/components/System/menu.vue";

export default {
  components: {
    Contact,
    Map,
    information,
    Nav
  },
};
</script>

<style scoped>
  .backimg{
    background-image: url("/Photo/A7M2(68).jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height:70vh;
  }
</style>
