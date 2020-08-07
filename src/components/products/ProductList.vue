<template>
  <div v-for="product in products" :key="product.id" class="row">
    <div>{{ product.name }}</div>
    <div>
      <button @click="removeProduct(product)" class="small">
        <img src="../../assets/delete-white-24dp.svg" alt="Delete" />
      </button>
    </div>
  </div>
</template>

<script>
import useGetProducts from '../../composition/products/useGetProducts'
import useRemoveProduct from '../../composition/products/useRemoveProduct'

export default {
  name: 'ProductList',
  setup() {
    const { products } = useGetProducts()
    const { removeProduct } = useRemoveProduct()

    return { products, removeProduct }
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
