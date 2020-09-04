<template>
  <button class="floating-button" :class="{ hidden: position > 10 }">
    <img src="../assets/add-white-36dp.svg" alt="" />
  </button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'FloatingButton',
  setup() {
    const position = ref(0)
    document.addEventListener('scroll', () => (position.value = window.scrollY))

    return { position }
  },
}
</script>

<style scoped>
.floating-button {
  position: fixed;
  z-index: 1000;
  bottom: 16px;
  right: 16px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  padding: 0;
  padding-top: 4px;
  visibility: visible;
  opacity: 1;
  -webkit-transition: opacity 200ms, visibility 200ms;
  transition: opacity 200ms, visibility 200ms;
  box-shadow: 1px 1px 3px #555;
}
.hidden {
  visibility: hidden;
  opacity: 0;
  -webkit-transition: opacity 200ms, visibility 200ms;
  transition: opacity 200ms, visibility 200ms;
}
</style>
