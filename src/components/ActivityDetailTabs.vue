<template>
  <router-link :to="{ name: 'ActivityView', params: { id: activityId } }">Inicio</router-link>
  <router-link :to="{ name: 'ActivityHistoryView', params: { id: activityId } }">Historial</router-link>
</template>

<script>
export default {
  name: 'ActivityDetailTabs',
  props: {
    activityId: {
      default: null,
    },
  },
}
</script>
<style scoped>
a {
  display: inline-block;
  width: 50%;
  height: 50px;
  line-height: 50px;
  border-bottom: 2px solid transparent;
  text-align: center;
  text-decoration: none;
  color: #555;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
}
a.router-link-active {
  border-bottom: 2px solid crimson;
  color: crimson;
}
</style>
