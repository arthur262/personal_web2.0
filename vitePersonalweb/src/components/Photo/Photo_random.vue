<template>
  <div>
{{ImgList}}
    <section>
      <div style="min-height: 100vh; max-width: 180ch; margin: 0 auto">
        <div style="margin-bottom: 10vh">
          <a-row :gutter="[32, 40]">
            <a-col :span="14">
              <Transition name="opcty">
                <div class="example"></div>
              </Transition>
              <div style="height: 5vh"></div>
              <a-row>
                <a-col :span="8"></a-col>
                <a-col :span="14">
                  <Transition name="opcty">
                    <div class="example_h"></div> </Transition
                ></a-col>
                <a-col :span="2"></a-col>
              </a-row>
            </a-col>
            <a-col :span="10">
              <div style="height: 15vh"></div>
              <Transition name="opcty">
                <div class="example_h"></div>
              </Transition>
            </a-col>
          </a-row>
        </div>
        <div style="margin-bottom: 10vh">
          <a-row :gutter="[32, 40]" style="margin-bottom: 10vh">
            <a-col :span="10">
              <div style="height: 15vh"></div>
              <Transition name="opcty">
                <div class="example_h"></div>
              </Transition>
            </a-col>
            <a-col :span="14">
              <Transition name="opcty">
                <div class="example"></div>
              </Transition>
              <div style="height: 5vh"></div>
              <a-row>
                <a-col :span="8"></a-col>
                <a-col :span="14">
                  <Transition name="opcty">
                    <div class="example_h"></div> </Transition
                ></a-col>
                <a-col :span="2"></a-col>
              </a-row>
            </a-col>
          </a-row>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  props: ['datas'],
  data() {
    return { ImgList: this.datas };
  },
  
  mounted:function() {
    
  },
};
</script>

<style scoped>
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
</style>
