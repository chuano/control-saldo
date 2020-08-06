import { useStore } from 'vuex'
import { computed } from 'vue'

const useProductHandler = () => {
  const store = useStore()
  const products = computed(() => store.state.products.products)

  const validateProduct = (product) => {
    if (product.name === null || product.name === '') throw new Error('Product name is required')
    if (product.price <= 0) throw new Error('Price is required')
    if (!product.id && products.value.some((x) => x.name === product.name)) throw new Error('Product exists')
  }

  const clearSelection = () => {
    store.commit('clearSelectedProduct')
  }

  const save = (product) => {
    try {
      validateProduct(product, store.state.products.products.value)
      if (product.id) {
        store.commit('updateProduct', product)
      } else {
        store.commit('addProduct', product)
      }
      store.commit('clearSelectedProduct')
    } catch (e) {
      alert(e.message)
    }
  }

  const select = (product) => {
    store.commit('selectProduct', product)
  }

  const remove = (product) => {
    if (!confirm(`¿Quieres eliminar el producto ${product.name}?`)) {
      return
    }
    store.commit('removeProduct', product)
  }

  return {
    products,
    clearSelection,
    save,
    select,
    remove,
  }
}

export default useProductHandler
