import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useAddProduct() {
  const store = useStore()
  const products = computed(() => store.state.products.products)

  function validateProduct(product) {
    if (product.name === null || product.name === '') throw new Error('Product name is required')
    if (product.price <= 0) throw new Error('Price is required')
    if (!product.id && products.value.some((x) => x.name === product.name)) throw new Error('Product exists')
  }

  function addProduct(product) {
    validateProduct(product, store.state.products.products.value)
    store.commit('addProduct', product)
  }

  return { addProduct }
}
