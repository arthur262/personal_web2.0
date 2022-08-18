<template>
  <div>
    <section>
      <div style="min-height: 100vh; max-width: 180ch; margin: 0 auto">
        <div style="margin-bottom: 10vh">
          <a-row :gutter="[{ xs: 0, sm: 8, md: 24, lg: 32 }]">
            <a-col :span="14">
              <div class="example fade-in"/>
              <div style="height: 5vh"/>
              <a-row>
                <a-col :span="8"/>
                <a-col :span="14">
                  <div class="example_h fade-in" />
                </a-col>
                <a-col :span="2"/>
              </a-row>
            </a-col>
            <a-col :span="10">
              <div style="height: 15vh"/>
              <div class="example_h fade-in" />
            </a-col>
          </a-row>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { onMounted, onUnmounted } from 'vue'
export default {
  setup() {
    var fadeInElements=[];
    onMounted(() => {
      fadeInElements = Array.from(document.getElementsByClassName('fade-in'));
      document.addEventListener('scroll', handleScroll)
  handleScroll()
    })

    onUnmounted(() => {
      document.removeEventListener('scroll', handleScroll);
    })
  },
  props: ["datas"],
  data() {
    return { 
      
      ImgList: this.datas };
  },
  

  mounted: function () {},
};
</script>

<style scoped>
.fade-in{
  opacity: 0;
}
.example {
  background: url(/Photo/A7M2_208.jpg) no-repeat;
  width: 100%;
  height: 40vh;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}
.example_h {
  background: url(/Photo/DSC00514-1.jpg) no-repeat;
  width: 100%;
  height: 60vh;
  background-position: center;
  background-size: cover;
  cursor: pointer;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.fademount-enter-active {
  animation: upswing 0.5s;
}
.fademount-leave-active {
  animation: upswing 0.5s reverse;
}

@keyframes upswing {
  0% {
    transform: translateY(-5%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
