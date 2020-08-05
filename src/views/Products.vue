<template>
  <h1>Productos</h1>
  <product-form />
  <product-list />
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
