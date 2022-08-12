<template>
  <div>
    <div class="cardb">
      <section style="padding-top: 30vh">
        <div v-for="(iteam, index) in datas.Project" :key="index" class="card">
          <!-- card description -->
          <a-card class="container">
            <a-card-meta>
              <template #description>
                <span >
                  <h2 style="float: left">{{ iteam.Title }}</h2>
                  <p style="margin: 0; float: right">
                    <b>{{ iteam.TimeRanges }}</b>
                  </p>
                </span>

                <br />
                <br />
                <span>
                  <h4 style="display: inline">Technical used:</h4>
                  <p
                    v-for="child in iteam.Technical"
                    :key="child"
                    style="display: inline"
                  >
                    {{ child }},
                  </p>
                </span>


                <span>
                <h4>
                  Github:
                  <a v-bind:href="iteam.github"> {{ iteam.github }}</a>
                </h4>
                </span>
                <ul v-for="child in iteam.children" :key="child.id">
                  <li>{{ child }}</li>
                </ul>
              </template>
            </a-card-meta>
          </a-card>
          <!-- deyail image -->
          <div>
            <span
              v-for="child in iteam.picture"
              :key="child.id"
              style="index: 20"
            >
              <img :src="child" height="500" class="image" />
            </span>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  setup() {},
  props: ["datas"],
  data() {
    return {};
  },
  mounted: function () {},
  methods: {},
  components: {},
};
</script>

<style scoped>
.card {
  display: flex;
  padding: 0;
  max-width: 140ch;
  margin: 10vh auto;
}

.card div {
  margin: 1ch;
}

.container {
  border-radius: 1.5ch;
  height: fit-content;
  top: 30%;
  z-index: 1;
  position: sticky;
  min-width: 30vw;
}
.image {
  margin: 5vh auto;
  border-radius: 1.5ch;
}
.cardb {
  background: url("/Photo/A7M2 (152).jpg") rgba(36, 36, 36, 1) no-repeat fixed;
  background-position: center;
  width: 100%;
  
}
</style>
