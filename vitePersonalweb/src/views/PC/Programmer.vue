<template>
  <div>
  <Transition>
  <p>hello</p>
</Transition>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>