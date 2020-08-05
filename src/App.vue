<template>
  <div id="app">
    <topbar />
    <router-view />
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
