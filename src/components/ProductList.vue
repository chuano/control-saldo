<template>
  <div v-for="product in products" :key="product.id" class="row">
    <div>{{ product.name }}</div>
    <div>
      <button @click="remove(product)" class="small">
        <img src="../assets/delete-white-24dp.svg" alt="Delete" />
      </button>
    </div>
  </div>
</template>

<script>
import useProductHandler from '@/composition/useProductHandler'

export default {
  name: 'ProductList',
  setup() {
    return {
      ...useProductHandler(),
    }
  },
}
</script>

<style scoped>
.row {
  line-height: 40px;
  border-bottom: 1px solid #ccc;
  padding-top: 8px;
}
</style>
