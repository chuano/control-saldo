<template>
  <div id="app">
    <topbar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
export default {
  name: 'App',
  components: {
    Topbar,
  },
}
</script>
<style>
.content {
  padding-top: 62px;
}
</style>
