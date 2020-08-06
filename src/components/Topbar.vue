<template>
  <div id="topbar">
    <div class="icon-column">
      <router-link :to="{ name: 'Home' }" v-if="isProductsRoute">
        <img src="../assets/keyboard_backspace-white-36dp.svg" width="36" height="36" alt="Back" />
      </router-link>
    </div>
    <div class="title-column">
      <h1>Saldo</h1>
    </div>
    <div class="icon-column">
      <router-link :to="{ name: 'Products' }" v-if="!isProductsRoute">
        <img src="../assets/settings-white-36dp.svg" width="36" height="36" alt="Settings" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
  name: 'Topbar',
  setup() {
    const route = useRoute()
    const isProductsRoute = computed(() => route.name === 'Products')

    return {
      isProductsRoute,
    }
  },
}
</script>

<style scoped>
#topbar {
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  box-shadow: #bbb 0 0 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: crimson;
  align-items: center;
  position: fixed;
  width: 100vw;
}
.icon-column {
  width: 32px;
  padding: 0 12px;
}
.title-column {
  padding: 0 12px;
}
h1 {
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  line-height: 44px;
  color: #fff;
  opacity: 0.95;
  padding-left: 6px;
}
</style>
