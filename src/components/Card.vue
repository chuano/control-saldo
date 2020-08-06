<template>
  <div class="card-container" :style="{ 'border-top': `5px solid ${color}` }">
    <h3>{{ title }}</h3>
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '',
    },
    color: {
      default: 'transparent',
    },
  },
}
</script>

<style scoped>
h3 {
  margin: 0 0 20px 0;
  padding: 0;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: normal;
}
.card-container {
  padding: 16px 16px;
  box-shadow: #ccc 0 1px 3px;
}
.card-content {
  font-size: 40px;
  font-weight: lighter;
  text-align: right;
}
</style>
