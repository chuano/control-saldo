<template>
  <div v-for="product in products" :key="product.id" class="row">
    <div>{{ product.name }}</div>
    <div>
      <button @click="removeProduct(product)" class="small">
        <img src="../assets/delete-white-24dp.svg" alt="Delete" />
      </button>
    </div>
  </div>
  <div v-if="products.length == 0">Aún no tienes productos definidos.</div>
</template>

<script>
import useGetActivityProducts from '../composition/useGetActivityProducts'
import useRemoveActivityProduct from '../composition/useRemoveActivityProduct'

export default {
  name: 'ActivityProductList',
  props: {
    activity: {
      default: () => {},
    },
  },
  setup(props) {
    const { products } = useGetActivityProducts(props.activity)
    const { removeProduct } = useRemoveActivityProduct(props.activity)

    return {
      products,
      removeProduct,
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
