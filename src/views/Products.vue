<template>
  <div class="container">
    <h2>Nuevo tipo</h2>
    <product-form class="new-form" />
    <h2>Tipos</h2>
    <product-list />
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm'
import ProductList from '@/components/ProductList'

export default {
  name: 'Products',
  components: {
    ProductForm,
    ProductList,
  },
}
</script>

<style scoped>
.new-form {
  margin-bottom: 16px;
}
</style>
